require('dotenv').config({ path: '.env.development' })
const postLambda = require('../src/utilities/postLambda')
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
  'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_KEY,
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

    const query = `mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        userErrors {
          field
          message
        }
        customer {
          id
        }
        customerUserErrors {
          field
          message
        }
      }
    }`

    //shopify-admin api doesn't accept password as a field
    const variables = {
      input: {
        email: body.email,
        password: body.password,
        acceptsMarketing: body.newsletter,
        firstName: body.firstName,
        lastName: body.lastName,
      },
    }

    axios
      .post(
        'https://cherries2018.myshopify.com/api/graphql',
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
        let response = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            customer,
          }),
        }
        callback(null, response)
        //TODO: FIGURE OUT HOW TO RUN postLambda HERE TO GET TOKEN AND CUSTOMER DETAILS
        // postLambda('getAccount', { email: body.email, password: body.password })
      })
      .catch(err => {
        console.log('ERROR!')
        return callback(err)
      })
  }
}
