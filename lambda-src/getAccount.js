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
  if (event.httpMethod !== 'POST' || !event.body) {
    return callback(null, {
      statusCode,
      headers,
      body: '',
    })
  }
  if (event.body[0] == '{') {
    let data = JSON.parse(event.body)
    let body = JSON.parse(data.body)

    const query1 = `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          userErrors {
            field
            message
          }
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            field
            message
          }
        }
      }
      `
    const variables1 = {
      input: {
        email: body.email,
        password: body.password,
      },
    }

    axios
      .post(
        'https://cherries2018.myshopify.com/api/graphql',
        {
          variables: variables1,
          query: query1,
        },
        { headers: shopifyConfig }
      )
      .then(function(data) {
        let token
        if (data.data.errors) {
          return callback(token.data.data.customerAccessTokenCreate.userErrors)
        } else {
          token =
            data.data.data.customerAccessTokenCreate.customerAccessToken
              .accessToken
        }
        let response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            token,
          }),
        }
        return callback(null, response)
      })
      .catch(err => {
        return callback(err)
      })

    // let token
    // try {
    //   token = await axios({
    //     url: 'https://cherries2018.myshopify.com/api/graphql',
    //     method: 'POST',
    //     headers: shopifyConfig,
    //     data: JSON.stringify(payload1),
    //   })
    //   if (token.data.data.customerAccessTokenCreate.userErrors.length > 0)
    //     throw token.data.data.customerAccessTokenCreate.userErrors
    //   else
    //     token =
    //       token.data.data.customerAccessTokenCreate.customerAccessToken
    //         .accessToken
    // } catch (err) {
    //   console.log(err)
    //   let response = {
    //     statusCode: 500,
    //     headers,
    //     body: JSON.stringify({
    //       error: err,
    //     }),
    //   }
    //   return callback(null, response)
    // }
    //   const query2 = `query customerQuery($customerAccessToken: String!){
    //       customer(customerAccessToken: $customerAccessToken) {
    //         firstName
    //         lastName
    //         acceptsMarketing
    //         phone
    //         email
    //         orders(first:100){
    //           edges{
    //             node{
    //               orderNumber
    //               totalPrice
    //               processedAt
    //               statusUrl
    //               successfulFulfillments(first: 100){
    //                 trackingInfo(first: 100){
    //                   number
    //                   url
    //                 }
    //               }
    //               lineItems(first:100){
    //                 edges{
    //                   node{
    //                     quantity
    //                     title
    //                     variant{
    //                       title
    //                       price
    //                       image{
    //                         originalSrc
    //                       }
    //                     }
    //                   }
    //                 }
    //               }

    //             }
    //           }
    //         }
    //       }
    //     }`,
    //     variables: {
    //       customerAccessToken: token,
    //     },
    //   }
    //   try {
    //     let customer = await axios({
    //       url: 'https://cherries2018.myshopify.com/api/graphql',
    //       method: 'POST',
    //       headers: shopifyConfig,
    //       data: JSON.stringify(payload2),
    //     })
    //     customer = customer.data.data.customer
    //     let response = {
    //       statusCode: 200,
    //       headers,
    //       body: JSON.stringify({
    //         customer,
    //       }),
    //     }
    //     callback(null, response)
    //   } catch (err) {
    //     console.log(err)
    //     let response = {
    //       statusCode: 500,
    //       headers,
    //       body: JSON.stringify({
    //         error: err.message,
    //       }),
    //     }
    //     callback(null, response)
    //   }
    // }
  }
}
