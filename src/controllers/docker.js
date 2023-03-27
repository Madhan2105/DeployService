const axios = require('axios');
require('dotenv').config()
const publisher = require('../utils/rabbit_mq_publisher')

exports.deployDocker = function(req,res){
    try{
        result = publisher.produceJenkinsTask().then(resp =>{
            res.json({success:true,"message":"Jenkins job initated sucessfully!"})    
        }).catch(err=>{
            res.json({success:false,"message":error.message})      
        })
        
    }catch(error){
        console.log("er",error.message)
        res.json({success:false,"message":error.message})        
    }
}


exports.destroyDocker = function(req,res){
    return 1
}