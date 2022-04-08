const { request } = require('express');
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');//smooth parse of data
const morgan = require ('morgan');  //logging requests
const mongoose = require('mongoose');// library for mongodb


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {

    const product ={
        id: 1,
        name: "hair dresser",
        image: "some_url",

    }
    res.send(product);
})

app.post(`${api}/products`, (req, res) => {

   const newProduct = req.body;
   console.log(newProduct); 
   res.send(newProduct);

})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'E-commerce'
})
.then(() =>{
    console.log('Database Connection is ready...')
})

.catch((err)=>{
    console.log(err);
})

app.listen(3000, () => {
    
    console.log('the server is running http://localhost:3000');
})