require('dotenv').config({ path: '.env.development' })
const axios = require('axios')
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
//although api said to use application/graphql we had to use application/json because we are using variables passed in as an object
const shopifyConfig = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Shopify-Access-Token': process.env.SHOPIFY_API_PASSWORD,
}

exports.handler = function(event, context, callback) {
  //make sure request is secure - CORS
  //sends an option method request
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

    const query = `mutation customerCreate($input: CustomerInput!) {
        customerCreate(input: $input) {
          userErrors {
            field
            message
          }
          customer {
            id
          }
        }
      }`

    //shopify-admin api doesn't accept password as a field
    const variables = {
      input: {
        email: body.email,
        acceptsMarketing: body.newsletter,
        firstName: body.firstName,
        lastName: body.lastName,
      },
    }

    axios
      .post(
        'https://cherries2018.myshopify.com/admin/api/graphql.json',
        {
          variables,
          query,
        },
        { headers: shopifyConfig }
      )
      .then(function(data) {
        let customer
        if (data.data.errors) {
          return callback(data.data.errors)
        } else {
          customer = data.data.customerCreate
        }
        // console.log('what is customer?', customer)
        let response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            customer,
          }),
        }
        return callback(null, response)
      })
      .catch(err => {
        console.log('ERROR!', err.response.data)
        return callback(err)
      })
  }
}
