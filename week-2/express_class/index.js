// creating an http server 
// using express 

// const express = require('express');
// const app = express();
// const port = 3000;
// 
// function fact(n)
// {
    // let i2=1,i;
    // for(i=1;i<=n;i++)
    // {
    //    i2 = i2*i;
    // }
    // return i2;
// }
// function sq(n)
// {
    // return n*n;
// }
// function cub(n)
// {
//    return n*n*n;
// }
// 
//  req , res => request(anything related to request is in req) and response(anything related to response is in res) 
// app.get("/", function(req,res){
    // let n = req.query.n;
    // let m = req.query.m;
    // let a = fact(n);
    // let b = sq(n);
    // let c = cub(n);
    // res.send( a.toString()+"       "+b.toString()+"       "+c.toString() + m.toString() );
// });
// 
// app.listen(port);
// 



// now building an in memory hospital
const express = require('express');
const app = express();
const port = 3000;

// creating an array of user objects
var users = [
    {
       name:"John",
       kidneys:[
        {
            healthy:false
        },
        {
            healthy:true
        }
]
    }
]

// getting the status of the kidneys using GET method
// POPULAR INPUT TYPE FOR GET REQUEST IS "QUERY PARAMETERS" OTHER INCLUDE "HEADERS","BODY","PARAMS",ETC.
// GENERALLY REQUESTS SENT THROUGH URL ARE "GET" REQUESTS
app.get("/", function(req,res){
    let c=0; let h=0,h2=0; // h is no. of healthy kidneys 
    // h2 is no. of unhealthy kidneys
    for(i in users[0].kidneys)
    {
        c++;
        const i2 = users[0].kidneys[i];
      //  console.log(i);

        //console.log("kjkjkjk"+users[0].kidneys[i].healthy);
        if(i2.healthy===true) // if(users[0].kidneys[i].healthy==true)
        h++;
        else
        h2++;
    }
    
    
    
   // res.send("no. of kidneys="+c+"    "+ "healthy="+h+ "    not healthy="+h2);

//   works alone not together
    // res.json({
    //    c,
    //    h,
    //    h2
//    });


  // works alone not together
   res.json({
      "total kidneys":c,
      "healthy kidneys":h,
      "unhealthy kidneys":h2
    });
    // so we cannot send two responses from a single route function we can send only one
})

// ADDING the healthy or unhealthy kidneys using POST method
// POPULAR INPUT TYPE FOR POST REQUEST IS "BODY" OTHER INCLUDE "HEADERS","PARAMS",ETC.
// GENERALLY REQUESTS SENT THROUGH URL ARE "GET" REQUESTS AND FOR POST REQUEST WE USE OTHER MEANS OF SENDING THE POST REQUEST LIKE DOM OR POSTMAN
app.use(express.json());
// above line is reqired for parsing "req.body" otherwise we would get "req.body" as undefined 
// this is somewhat related to middlewares because we use app.use() in case of middleares generally
app.post("/", function(req,res)
 {
    let ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    });
 //   res.send("done");
  res.json({
    status:'done'
  });
 })


 // REPLACING the unhealthy with healthy kidneys using PUT method
// POPULAR INPUT TYPE FOR PUT REQUEST IS "BODY" OTHER INCLUDE "HEADERS","PARAMS",ETC.
// GENERALLY REQUESTS SENT THROUGH URL ARE "GET" REQUESTS AND FOR PUT REQUEST WE USE OTHER MEANS OF SENDING THE POST REQUEST LIKE DOM OR POSTMAN
 app.put("/", function(req,res){
      if(unhealthykidney())
      { 
        for(let i=0;i< users[0].kidneys.length;i++)
        { 
         users[0].kidneys[i].healthy= true;
         }
          res.json({});
      }
      else{
        res.status(411).json(
            {
                msg:"no unhealthy kidneys"
            }
        )
    }
 })

 // DELETING the unhealthy  kidneys using DELETE method
//POPULAR INPUT TYPE FOR DELETE REQUEST IS "BODY" OTHER INCLUDE "HEADERS","PARAMS",ETC.
//GENERALLY REQUESTS SENT THROUGH URL ARE "GET" REQUESTS AND FOR DELETE REQUEST WE USE OTHER MEANS OF SENDING THE POST REQUEST LIKE DOM OR POSTMAN
 app.delete("/", function(req,res){
    if(unhealthykidney())
    { let newkidneys = [];
        for(let i=0;i< users[0].kidneys.length;i++)
        {
        if(users[0].kidneys[i].healthy)
        {
            newkidneys.push(users[0].kidneys[i]);
        }
            }
        
            users[0].kidneys=newkidneys;
            res.json({});
    }
    else{
        res.status(411).json(
            {
                msg:"no unhealthy kidneys"
            }
        )
    }
 })

 function unhealthykidney()
 {
    let unhealthykidneys = false;
    for(let i=0;i< users[0].kidneys.length;i++)
    {
        if(!users[0].kidneys[i].healthy)
        {
            unhealthykidneys = true;
            break;
        }
    }

    return unhealthykidneys;
 }
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
});


// WILDCARD
// app.get("/files/:filename"()=>{});  // this can access any url of form ./files/hghghg
// where we can get hghghg(string until next '/' is encountered) using "req.params.filename" 