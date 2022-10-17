const express =require('express');
//export exoresss from 'express';
const mysql= require('mysql');
const connect=require('./db');
const session= require('express-session');
const MySQLStore = require("express-mysql-session")(session);
const app=express();

app.use(express.urlencoded ({ extended: false }));
app.use(express.json());


app.set('view engine','ejs');
app.use(express.static('public'))



app.get('/index',(req,res)=>{
    res.render('index');
})
 
//add health
app.get('/HealthPractitioner',(req,res)=>{

    var sql='SELECT * FROM healthparactitioner;';
    connect.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('Health Practitioner', {isAdded : true,user: data});
  });
    
    
})

//post add health
app.post('/HealthPractitioner',(req,res,next)=>{
    let first_name=req.body.first_name;
    let se_name=req.body.se_name;
    let list_name=req.body.list_name;
    let ar_first_name=req.body.Arabic_first_name;
    let ar_se=req.body.Arabic_se_name;
    let ar_list_name=req.body.Arabic_list_name;
    let Specialization=req.body.Specialization;
    let Clinic=req.body.Clinic;
    let Role=req.body.Role;
    let momares_number=req.body.momares_number;
    let phone_number=req.body.phone_number;
    let up_sgnil=req.body.up_sgnil;
    var sql='SELECT * FROM healthparactitioner;';
    connect.query(sql, function (err, data, fields) {
    if (err) throw err;
    let sql='select * from healthparactitioner where phone_number="'+phone_number+'"';
    
    connect.query(sql,(er,resl)=>{
       
       
        if(!er){
           
            let inset_query='insert into healthparactitioner (first_name,se_name,list_name,ar_first_name,ar_se_name,ar_list_name,Specialization,Clinic,Role,Momares_number,phone_number,sig)values("'+first_name+'","'+se_name+'","'+list_name+'","'+ar_first_name+'","'+ar_se+'","'+ar_list_name+'","'+Specialization+'","'+Clinic+'","'+Role+'","'+momares_number+'","'+phone_number+'","'+up_sgnil+'")';
            if(resl.length===0){
                connect.query(inset_query,(e)=>{
                    if(!e){
                        res.render('Health Practitioner',{isAdded : true,user: data});
                    }else{
                        console.log(e);
                    }
                })
            }else{
                res.render('Health Practitioner',{isAdded : true,user: data});
            }
        }else{
            connect.log(er)
        }


    })
  });

    
})




//<%- include('./supp/header.ejs')%>

app.listen(3000,()=>{
    console.log("Server is Working...");
    })