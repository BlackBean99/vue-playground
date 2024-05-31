const cors = require('cors');
const express = require("express");

const app = express.Router();

app.use(cors());

const memberDao = require('../json/memberProc');

app.use(cors({ origin:"*" }));

app.post("/memberAdd", function(req, res){
    console.log("memberAdd 접속성공");

    let name = req.body.name;
    let age = req.body.age;
    let phone = req.body.phone;
    let address = req.body.address;
    let memo = req.body.memo;

    console.log(req.body);
    //console.log(name, age, phone, address, memo);
    
    let result = memberDao.insert(name, age, phone, address, memo);
    console.log(result);

    res.send({"result":result});    
})



module.exports = app;

