const url = require('url')
const address = 'www.netvasco.com.br'
const parserUrl = new url.URL(address)

console.log(parserUrl.host)
console.log(parserUrl.pathname)
console.log(parserUrl.search)
console.log(parserUrl.searchParams)