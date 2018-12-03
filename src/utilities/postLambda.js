import axios from 'axios'
const windowGlobal = typeof window !== 'undefined' && window

function postLambda(lambdaName, data) {
  console.log('POSTLAMBDA, WORKING')
  try {
    console.log('POST REQUEST', windowGlobal.location.hostname)
    return axios.post(
      windowGlobal.location.hostname === 'localhost'
        ? `http://localhost:9000/${lambdaName}`
        : process.importenv.LAMBDA_ENDPOINT + lambdaName,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
  } catch (err) {
    return console.log(lambdaName + 'failed', err)
  }
}

export default postLambda