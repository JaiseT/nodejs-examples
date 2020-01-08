const port = process.env.PORT || 3000
const service_name = process.env.SERVICE_NAME || 'test-1-v1'
const upstream_uri = process.env.UPSTREAM_URI || 'http://time.jsontest.com/'

const express = require("express")
const app = express()
const request = require("request-promise-native")



app.get('/', async(req, res) => {
    //console.log("Hello World!")
    const begin = Date.now()

    let up

    try {
        up = await request({url: upstream_uri,headers: {}})
    } catch (error) {
        up = error
    }

    const timeSpent = (Date.now() - begin)/1000 + "secs"

    res.end(`${service_name} - ${timeSpent} \n ${upstream_uri}-> ${up}`)

})

app.listen(port, () => {

    console.log(`${service_name} listening ${port}`)

})

