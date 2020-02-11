// This file is separate from index.js and all the files in views directory
//  Part of Node server tutorial https://blog.risingstack.com/your-first-node-js-http-server/

// app.use: this is how you can define middlewares - it takes a function with three parameters, the first being the request, the second the response and the third one is the next callback. Calling next signals Express that it can jump to the next middleware or route handler.
// The first middleware just logs the headers and instantly calls the next one.
// The seconds one adds an extra property to it - this is one of the most powerful features of the middleware pattern. Your middlewares can append extra data to the request object that downstream middlewares can read/alter.

const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)


// console logs the following
// {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
//   'sec-fetch-dest': 'document',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9',
//   'if-none-match': 'W/"71-yOskwR9RIirw0MYR3Zk/tpVhNeA"'
// }
