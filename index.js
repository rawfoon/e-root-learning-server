const express = require('express')
const app = express()
const port = process.env.PORT || 5000



app.get('/', (req, res) =>{
    res.send('E-root api running')
})


app.listen(port, ()=>{
    console.log('e-root learning on port', port)
})