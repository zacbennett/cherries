require('dotenv').config({ path: '.env.development' })
const axios = require('axios')
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const shopifyConfig = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_KEY,
}

exports.handler = async function(event, context, callback) {
  console.log('CREATECHECKOUT RAN')
  context.callbackWaitsForEmptyEventLoop = false
  // TEST for post request
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: '',
    })
  }
  // TEST if the event body has data relevant to be parsed. Is valid post request
  if (event.body[0] == '{') {
    let data = JSON.parse(event.body)
    data = JSON.parse(data.body)
    console.log('CREATECHECKOUT DATA', data)

    const payload1 = {
      query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          userErrors {
            field
            message
          }
          checkout {
            id
          }
          checkoutUserErrors {
            field
            message
          }
        }
      }
      `,
      // query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
      //       checkoutCreate(input: $input) {
      //         checkout {
      //           id
      //           webUrl
      //         }
      //         checkoutUserErrors {
      //           field
      //           message
      //         }
      //       }
      //     }`,
      variables: { input: { lineItems: data.items } },
    }
    let checkoutData
    try {
      let response = await axios({
        url: 'https://cherries2018.myshopify.com/api/graphql',
        method: 'post',
        headers: shopifyConfig,
        data: JSON.stringify(payload1),
      })

      // console.log('CHECKOUTDATA', checkoutData.data.errors[0].problems)
      checkoutData = response.data.data.checkoutCreate.checkout

      console.log('checkoutData', checkoutData)
    } catch (err) {
      console.log(err)
      let responseObj = {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: err.message,
        }),
      }
      callback(null, responseObj)
    }

    // IF the user has an account ASK shopify for a customeraccesstoken and asscoiate the checkout with the account
    if (!data.hasAccount) {
      let responseObj = {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          data: checkoutData,
        }),
      }
      console.log('createcheckout responseObj', responseObj)
      callback(null, responseObj)
    } else {
      console.log('data.user.token', data.user.token)
      console.log('checkoutData.id', checkoutData.id)
      const payload3 = {
        query: `mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
          checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
            userErrors {
              field
              message
            }
            checkout {
              id
            }
            customer {
              id
            }
          }
        }`,
        variables: {
          checkoutId: checkoutData.id,
          customerAccessToken: data.user.token,
        },
      }
      try {
        console.log('TRY RAN')
        await axios({
          url: 'https://cherries2018.myshopify.com/api/graphql',
          method: 'POST',
          headers: shopifyConfig,
          data: JSON.stringify(payload3),
        })
        // console.log('token2', response)
        let response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            data: checkoutData,
          }),
        }
        callback(null, response)
      } catch (err) {
        console.log(err)
        let response = {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            error: err.message,
          }),
        }
        callback(null, response)
      }
    }
  }
}
