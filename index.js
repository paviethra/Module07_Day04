const express = require('express');
const app = express();
const port = 3000;

const api = require('./public/api')
const bodyParser= require('body-parser');


app.use(bodyParser.json());
app.use('/api/v1',api)
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})