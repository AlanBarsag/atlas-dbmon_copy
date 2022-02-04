const express = require("express");
const mysql = require("mysql");
const parser = require("body-parser");

let dbInfo;
const conn = mysql.createConnection({
    host: "185.220.204.147",
    database: "secondServo",
    user: "root",
    password: "Integral14021999"
});

conn.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection to database");
    }
})

const app = express();
app.use(parser.json());


app.get('/db/basic_metrics/:db/5', function(request, response) {
    
    conn.query("SELECT baseInfo FROM DBMON WHERE dbName = " + "'" + request.params.db + "'", function(err, result, field) {
        console.log(result[0].baseInfo);
        console.log(err);
        //Добавить проверку
        //response.set('access-control-allow-credentials', 'true');
        
        //response.write(result[0].baseInfo);
        response.send(result[0].baseInfo);
        //response.end();
    });
    
    
})

app.listen(3000);
