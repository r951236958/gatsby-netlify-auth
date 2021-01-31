import axios from "axios"

exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.GATSBY_UNSPLASH_ACCESS_KEY

  const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&amp;count=${10}&amp;collections='3816141,1154337,1254279'`

  axios.get(doggoEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}
