const express = require('express');
const app = express()
const port = 3000;

app.get("/sum",(req,res)=>{
     let a = req.query.a;
     let b = req.query.b;
     let c = +a + +b; // +"1" = 1 (unary '+' parses a string into integer)
     res.send("sum is"+c);
})
app.listen(port,()=>{
    console.log(`exapmle app listening on port ${port}`);
})