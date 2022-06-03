const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');
const db = require('../connect/env')

const app = express();
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
  });

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected....');
})

// Get all data
// module.get=(app.get);

app.get('/Appointment', (req, res) => {
    let qr = `Select * from public."Appointment"`
    db
        .query({
            // rowMode: "array",
            text: qr
        })
        .then(result => {
            
            var data1 = [];

            for (var i = 0; i < result.rows.length; i++) {

                data1.push({

                    firstname: result.rows[i].firstname,

                    lastname: result.rows[i].lastname,

                    Phone: result.rows[i].Phone,

                    Email: result.rows[i].Email,
                    
                    Age:result.rows[i].Age,

                    Bgroup:result.rows[i].Bgroup,

                    doctorename:result.rows[i].doctorename,

                    message: result.rows[i].message

                });
            

            }

            // console.log(result);
            // if(result.length > 0)
            // {
            // console.log(result.rows[0].Name);
            res.send(
                // message: 'all user data',
                // data: result.rows
                data1
            );
            // }
        })
        .catch(err => console.log(err, 'errs'));
});

//post method
app.post('/form',(req,res)=>{

    console.log(req.body,'createdata');
  
   let firstname = req.body.firstname;
   let lastname = req.body.lastname;
   let Email = req.body.Email;
   let Phone = req.body.Phone;
   let Age=req.body.Age;
   let doctorename=req.body.doctorename;
   let message = req.body.message;
  
   let qr = `insert into Appointment(firstname,lastname,Phone,email,Age,Bgroup,message)
             values('${firstname}','${lastname}','${Email}','${Phone}','${Age}','${doctorename}','${message}')`;
      console.log(qr,'qr')
  
    db.query(qr,(err,result)=>{
  
      if(err){console.log(err);}
      console.log(result,'result')
      res.send({
        message:'data inserted'
      });
    });
  });



app.listen(3000, () => {
    console.log('Server Running');
})