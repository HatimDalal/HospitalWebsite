const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { Client } = require('pg');
const { default: cli } = require('@angular/cli');
const res = require('express/lib/response');
const { header } = require('express/lib/response');

const client = require('./connection');
const { firstValueFrom } = require('rxjs');

const app = express();

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
});

// var corsOptions={
//   origin:"http://localhost:4200"
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json

// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded

// app.use(bodyParser.urlencoded({ extended: true }));

// // simple route

// app.use(bodyparser.json());

// app.use(cors());
// app.options('/form', cors())
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });



// client.connect();

// Connection
client.connect(err => {
  if (err) { console.log('err'); }
  console.log('database Connected....');
})
//get method
app.get('/form',(req,res) => {
  let qr = `Select * from public."form"`
  client.query({
    text:qr
  })
  .then(result=> {
    var data1 = [];
    for (var i=0;i<result.rows.length;i++){
      data1.push({
        fname: result.rows[i].fname,
        lname: result.rows[i].lname,
        pnumber: result.rows[i].pnumber,
        email:result.rows[i].email,
        issue:result.rows[i].issue
      });
    }
    res.send(data1);
  })
  .catch(err => console.log(err,'errs'));
});

//post method
app.post('/form',(req,res)=>{

  console.log(req.body,'createdata');

 let firstname = req.body.fname;
 let lastname = req.body.lname;
 let phonenumber = req.body.pnumber;
 let Email = req.body.email;
 let Issue = req.body.issue;

 let qr = `insert into form(fname,lname,pnumber,email,issue)
           values('${firstname}','${lastname}','${phonenumber}','${Email}','${Issue}')`;
    console.log(qr,'qr')

  db.query(qr,(err,result)=>{

    if(err){console.log(err);}
    console.log(result,'result')
    res.send({
      message:'data inserted'
    });
  });
});


app.listen(3000,() => {
  console.log('server running');
})



//select query
// client.query(`select * from form`,(err,result)=>
// {
//   if(!err) {
//     console.log(result.rows);
//   }
//   client.end();
// })


