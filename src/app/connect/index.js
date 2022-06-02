const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('../connect/env')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected....');
})

// Get all data
// module.get=(app.get);
app.get('/data', (req, res) => {

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

            
            res.send(

                // message: 'all user data',

                // data: result.rows

                data1

            );

            // }

        })

        .catch(err => console.log(err, 'errs'));

});


