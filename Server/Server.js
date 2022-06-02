const express = require('express');
const app = express();

app.get("/",(req,res,next)=>{
    return res.json({data:"datal"});
})

app.listen(3000,error => {
    if(error)
        console.log("Error occured: "+error);
    console.log("Server is online...")
});