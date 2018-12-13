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
  console.log(
    '\n\n\n\n reached top of getAccount are we running? event:',
    event.body,
    'context:',
    context,
    'callback:',
    callback
  )
  let statusCode = 200
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
      customerAccessToken: body.token,
    }
    // console.log('ARE WE GETTING CUSTOMER VARIABLE?', customerVariable)
    // console.log('ARE WE GETTING CUSTOMER QUERY?', customerQuery)
    // console.log('ARE WE GETTING SHOPIFY CONFIG?', shopifyConfig)

    try {
      let response = await axios.post(
        'https://cherries2018.myshopify.com/api/graphql',
        { variables: customerVariable, query: customerQuery },
        { headers: shopifyConfig }
      )
      console.log('WHAT DOES RESPONSE LOOK LIKE', response)
      console.log('WHAT DOES RESPONSE.DATA LOOK LIKE', response.data)
      console.log('WHAT DOES RESPONSE.DATA.DATA LOOK LIKE', response.data.data)
      if (response.data.data.errors) {
        // console.log('DID WE ERROR OUT?:', response.data.data)
        return callback(response.data.data)
      } else {
        console.log('OR DID WE SUCCEED?', body, body.token)
        let customer = response.data.data.customer
        console.log('IS CUSTOMER NULL?', customer)
        customer.token = body.token
        let responseObj = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            customer,
          }),
        }
        console.log('WHAT IS THE CALLBACK FN?', callback)

        return callback(null, responseObj)
      }
    } catch (err) {
      return callback(err)
    }
  }
}
