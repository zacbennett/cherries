require('dotenv').config({ path: '.env.development' })
const postLambda = require('../src/utilities/postLambda')
const axios = require('axios')
const getAccount = require('../lambda-src/getAccount')

// const aws = require('aws-sdk')
// const lambda = new aws.Lambda()
//   {
//   region: 'us-west-2' //change to your region
// }

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

function createCustomer(data, body, cb) {
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
  // console.log('here are the variables', variables)
  axios
    .post(
      'https://cherries2018.myshopify.com/api/graphql',
      {
        variables,
        query,
      },
      { headers: shopifyConfig }
    )
    .then(async function(response) {
      let customer
      if (response.data.errors) {
        return cb(response.data.errors)
      } else {
        customer = response.data.data.customerCreate
      }
    })
}
/** GET TOKEN FROM SHOPIFY STOREFRONT API */
async function getToken(body, callback) {
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
  console.log('WHAT ARE THE TOKEN_VARIABLES:', tokenVariables)
  // console.log('WHAT IS SHOPIFY CONFIG:', shopifyConfig)
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
    // console.log('LOOK AT THE RESPONSE A LITTLE DEEPER:', response)
    console.log(
      'WHATS THE RESPONSE.DATA.DATA.CUSTOMERACCESSTOKENCREATE:',
      response.data.data.customerAccessTokenCreate
    )
    // console.log('WHATS THE RESPONSE.DATA.DATA:', response.data.data)
    if (response.data.data.errors) {
      return callback(response.data.data.customerAccessTokenCreate.userErrors)
    } else {
      // console.log(
      //   'TOKEN CREATE',
      //   response.data.data.customerAccessTokenCreate
      // )
      token =
        response.data.data.customerAccessTokenCreate.customerAccessToken
          .accessToken
      console.log('ARE WE GETTING A TOKEN?', token)
      return token
    }
  } catch (err) {
    // console.log('OR ARE WE GETTING AN ERROR:', err)
    return callback(err)
  }
}
async function getCustomer(body, token, callback) {
  let loginInfo = {
    email: body.email,
    password: body.password,
  }
  // let request = {
  //   httpMethod: 'POST',
  //   body: JSON.stringify({
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(loginInfo),
  //   }),
  // }
  console.log('\n\n\n\n\n\nNEVER LET ME DOWN')
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
  console.log('ARE WE GETTING CUSTOMER VARIABLE?', customerVariable)
  // console.log('ARE WE GETTING CUSTOMER QUERY?', customerQuery)
  // console.log('ARE WE GETTING SHOPIFY CONFIG?', shopifyConfig)
  try {
    let response = await axios.post(
      'https://cherries2018.myshopify.com/api/graphql',
      { variables: customerVariable, query: customerQuery },
      { headers: shopifyConfig }
    )
    if (response.data.data.errors) {
      // console.log('DID WE ERROR OUT?:', response.data.data)
      return callback(response.data.data)
    } else {
      console.log('OR DID WE SUCCEED?')
      let customer = response.data.data.customer
      customer.token = token
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

/** ACTUAL FUNCTION */
exports.handler = async function(event, context, callback) {
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

    // CREATING A NEW CUSTOMER BUT NO NEED TO RETURN ANYTHING
    createCustomer(data, body, callback)
    // GETTING TOKEN
    let token = getToken(body, callback)
    // After signing user up, immediately log then im using getAccount lambda function
    getCustomer(body, token, callback)
  }
}
