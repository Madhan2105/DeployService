var express = require('express');
var router = require('./src/routes/api_routes')
var app = express()


app.get("/",function(req,res){
    res.json({"hey":"welcome to express js"})
});


app.use('/instance',router);
app.listen(3000);
console.log("App has started in port 3000");