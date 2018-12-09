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

    // Initial query to create token from Shopify Storefront API based on customer input email and password
    // Still generating non-terminating error of statusCode undefined
    // TODO: Abstract logic into separate class to handle graphQL/axios requests to Shopify API
    const tokenQuery = `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
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
    const tokenVariables = {
      input: {
        email: body.email,
        password: body.password,
      },
    }

    let token
    try {
      let response = await axios.post(
        'https://cherries2018.myshopify.com/api/graphql',
        {
          variables: tokenVariables,
          query: tokenQuery,
        },
        { headers: shopifyConfig }
      )
      if (response.data.data.errors) {
        return callback(response.data.data.customerAccessTokenCreate.userErrors)
      } else {
        token =
          response.data.data.customerAccessTokenCreate.customerAccessToken
            .accessToken
      }
    } catch (err) {
      return callback(err)
    }

    // Query to pull customer information based on authenticated token generated from previous query
    const customerQuery = `query customerQuery($customerAccessToken: String!){
          customer(customerAccessToken: $customerAccessToken) {
            firstName
            lastName
            acceptsMarketing
            phone
            email
            id
            orders(first:100){
              edges{
                node{
                  orderNumber
                  totalPrice
                  processedAt
                  statusUrl
                  successfulFulfillments(first: 100){
                    trackingInfo(first: 100){
                      number
                      url
                    }
                  }
                  lineItems(first:100){
                    edges{
                      node{
                        quantity
                        title
                        variant{
                          title
                          price
                          image{
                            originalSrc
                          }
                        }
                      }
                    }
                  }

                }
              }
            }
          }
        }`

    const customerVariable = {
      customerAccessToken: token,
    }

    try {
      let response = await axios.post(
        'https://cherries2018.myshopify.com/api/graphql',
        { variables: customerVariable, query: customerQuery },
        { headers: shopifyConfig }
      )
      if (response.data.data.errors) {
        return callback(response.data.data)
      } else {
        let customer = response.data.data.customer
        let responseObj = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            customer,
          }),
        }

        return callback(null, responseObj)
      }
    } catch (err) {
      return callback(err)
    }
  }
}
