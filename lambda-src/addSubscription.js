require('dotenv').config({ path: '.env.development' })
const axios = require('axios')
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const shopifyConfig = {
  'Content-Type': 'application/json',
  'X-Shopify-Access-Token': process.env.SHOPIFY_API_PASSWORD,
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

    const subscriptionQuery = `mutation tagsAdd($id: ID!, $tags: [String!]!) {
      tagsAdd(id: $id, tags: $tags) {
        userErrors {
          field
          message
        }
        node {
          id
        }
      }
    }
    `
    const subscriptionVariables = {
      id: body.id,
      tags: body.tags,
    }

    try {
      let response = await axios.post(
        'https://cherries2018.myshopify.com/admin/api/graphql.json',
        {
          variables: subscriptionVariables,
          query: subscriptionQuery,
        },
        { headers: shopifyConfig }
      )
      if (response.data.data.errors) {
        return callback(response.data.data.tagsAdd.userErrors)
      } else {
        let tagObj = response.data.data.tagsAdd.node
        let responseObj = {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            tagObj,
          }),
        }
        return callback(null, responseObj)
      }
    } catch (err) {
      return callback(err)
    }
  }
}
