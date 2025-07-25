import http from 'http'
import url from 'url'
import {data} from './data.js'


const server = http.createServer((req,res) =>{
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.pathname
    res.setHeader('Content-Type', 'text/html')

    if (path === '/') {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>${data.home.title}</h1>`);
    res.end();
    }
    else if (path == '/about' ){
        res.end('Welcome to the about page!')
    }
    else if (path == '/contact') {
        res.end('Welcome to the contact page!')
    }
    else {
        res.end('404 Not Found')
    }

})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})