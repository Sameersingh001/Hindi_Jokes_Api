import express from 'express';
import {jokes} from './Apidata.js'
import {ErrorData} from './Apidata.js'

const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Hindi Jokes API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    color: #333;
                    padding: 30px;
                    line-height: 1.8;
                }
                h1 {
                    text-align: center;
                    color: #009688;
                }
                .route {
                    background-color: #fff;
                    border-left: 6px solid #009688;
                    padding: 15px;
                    margin-bottom: 20px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.1);
                }
                code {
                    background-color: #eee;
                    padding: 2px 5px;
                    border-radius: 4px;
                }
                footer {
                    margin-top: 40px;
                    text-align: center;
                    color: #aaa;
                }
            </style>
        </head>
        <body>
            <h1>📘 Welcome to the Hindi Jokes API</h1>

            <div class="route">
                <strong>🟢 GET <code>/random/joke</code></strong><br>
                Returns a <strong>random joke</strong> from the dataset.<br>
                👉 <a href="/random/joke" target="_blank">Try it</a>
            </div>

            <div class="route">
                <strong>🔵 GET <code>/random/joke/:id</code></strong><br>
                Returns a joke by its <strong>ID (1 to 1000)</strong>.<br>
                👉 Example: <a href="/random/joke/55" target="_blank">/random/joke/55</a>
            </div>

            <div class="route">
                <strong>🟣 GET <code>/random/joke/category/:id</code></strong><br>
                Returns <strong>all jokes</strong> from a specific category.<br>
                👉 Example: <a href="/random/joke/category/school" target="_blank">/random/joke/category/school</a><br>
                (Use lowercase, e.g., <code>school</code>, <code>pati patni</code>, <code>programming</code>)
            </div>

            <footer>Made with ❤️ for fun APIs — Hindi Jokes Edition by Sameer Singh</footer>
        </body>
        </html>
    `);
});





app.get('/random/joke', (req, res)=>{
 
        const randomjoke = (Math.floor(Math.random() * jokes.length ))
        if (randomjoke) {
                // res.send(`<script>   alert("📘 Welcome to the Jokes API – Use endpoints to get jokes by ID, category, or randomly."); </script>`)
                res.send(jokes[randomjoke])
        }
        else{
                res.send(`<h1 style="text-align: center; color: red;">${ErrorData[0].status}   ${ErrorData[0].message}  ${ErrorData[0].error.description}</h1>`)
        }
})



app.get('/random/joke/:id', (req, res)=>{

        const Id = parseInt(req.params.id)
        const jokeId = jokes.find(item => (item.id === Id))

         if (jokeId) {
            res.send(jokeId)

         }
         else{
                res.send(`<h1 style="text-align: center; color: red;">${ErrorData[0].status}   ${ErrorData[0].message}  ${ErrorData[0].error.description}</h1>`)
         }


})

app.get('/random/joke/category/:id', (req, res)=>{


        const category = (req.params.id)
        const categories = (jokes.filter(item => item.category.toLowerCase() === category.toLowerCase()))
        if (categories.length > 0) {
                res.send(categories)
        }        
        else{
                res.send(`<h1 style="text-align: center; color: red;">${ErrorData[0].status}   ${ErrorData[0].message}  ${ErrorData[0].error.description}</h1>`)
        }
})





app.listen(port, ()=>{
    console.log('server is running at port', port)
})