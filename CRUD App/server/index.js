const express= require ("express");
const app=express();
const mysql= require("mysql");

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    port:"3306",
    database:"employee-system"
})

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const country = req.body.country;
    const age = req.body.age;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("INSERT INTO employees (name,age,country,position,wage) VALUES(?,?,?,?,?)",[name,age,country,position,wage],(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("VALUES INSERTED");
        }
    })
})
app.listen(3001,()=>{
    console.log("poda sunni")
})

