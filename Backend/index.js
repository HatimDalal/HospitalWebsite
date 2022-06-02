const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { Client } = require('pg');
const { default: cli } = require('@angular/cli');
const res = require('express/lib/response');
const { request } = require('http');
const { header } = require('express/lib/response');


header("Content-Type: application/json");


const port = 3000;
const app = express();

//database connection
const client = new Client({
    host: "localhost",
    port:5432,
    user:"postgres",
    password:"root",
    database:"Hospital"
})

app.use(cors());
app.options('/form/:id', cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//to connect
client.connect(err =>{
    if (err) {console.log(err,'dberr');}
    console.log('database connected..');
});

app.listen(port, () =>
console.log(`welcome.:${port}`));

app.get('http://localhost:3000/', (request,response) => {
  response.send("get method");
})

app.post('http://localhost:3000/', (request, response) => {
  res.send("POST Request Called")
})



// client.query(`select * from form`, (err, result) => {
//       if(!err) {
//           console.log(result.rows);
//           console.log(result.rowCount);
//       }
//       client.end();
//     })

    // client.query('/localhost:3000/form', function(req, res){
    //   console.log("Hello from the 'test' URL");
    // });
