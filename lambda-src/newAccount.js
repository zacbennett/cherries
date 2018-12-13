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

exports.handler = async function(event, context, callback) {
  //make sure request is secure - CORS
  //sends an option method request
  // console.log('we ran new account')
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
          console.log('what are the response.data.errors', response.data.errors)
          console.log('what does callback look like again?', callback)
          // return response.data.errors
          return callback(response.data.errors)
        } else {
          customer = response.data.data.customerCreate
          console.log('ARE WE MAKING A NEW CUSTOMER?', customer)
        }
        // let responseObj = {
        //   statusCode: 200,
        //   headers,
        //   body: JSON.stringify({
        //     customer,
        //   }),
        // }

        // After signing user up, immediately log then im using getAccount lambda function
        // Instead of using lambda function, just import the getAccount function definition and call directly
        let loginInfo = {
          email: body.email,
          password: body.password,
          remember: true,
        }
        let request = {
          httpMethod: 'POST',
          body: JSON.stringify({
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
          }),
        }

        console.log('\n\n\n\nabout to call get account ----- request:', request)
        let loggedInUser = await getAccount.handler(request)
        console.log('WHAT DOES LOGGEDINUSER LOOK LIKE', loggedInUser)
        return callback(null, loggedInUser)
      })
      .catch(err => {
        return callback(err)
      })
  }
}
