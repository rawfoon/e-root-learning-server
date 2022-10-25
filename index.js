const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())


const categories = require('./data/categories.json')

app.get('/', (req, res) =>{
    res.send('E-root api running')
})

app.get('/categoris', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log('e-root learning on port', port)
})