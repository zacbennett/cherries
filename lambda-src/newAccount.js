require('dotenv').config({ path: '.env.development' })
const axios = require('axios')
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const shopifyConfig = {
  'Content-Type': 'application/graphql',
  'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_KEY,
}
exports.handler = async function(event, context, callback) {
  // TEST for POST request
  console.log('NEWACCOUNT, WORKING')
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: '',
    })
  }
  if (event.body[0] == '{') {
    let data = JSON.parse(event.body)
    data = JSON.parse(data.body)

    const payload = {
      query: `mutation customerCreate($input: CustomerInput!) {
        customerCreate(input: $input) {
          userErrors {
            field
            message
          }
          customer {
            id
          }
        }
      }`,
      variables: {
        input: {
          email: data.email,
          password: data.password,
          acceptsMarketing: data.newsletter,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      },
    }

    try {
      let customer = await axios({
        url: 'https://cherries2018.myshopify.com/admin/api/graphql.json',
        method: 'POST',
        headers: shopifyConfig,
        data: payload,
      })
      if (customer.data.errors.length > 0) customer = customer.data.errors
      else customer = customer.data.data.customerCreate
      let response = {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          customer,
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
