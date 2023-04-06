const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json())
const AWS=require('aws-sdk')
const creds=new AWS.SharedIniFileCredentials({profile:'default'})
const sns=new AWS.SNS({creds,region:'ap-southeast-2'})


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/status", (req, res, next) => {
  return res.status(200).json({
    status:"ok",
    sns
  });
});
// app.post('/subscribe',(req,res)=>{
//   let params={
//     Protocol:'EMAIL',
//     TopicArn:'arn:aws:sns:ap-southeast-2:711960976249:offerTopic',
//     Endpoint: "laukikpatade22@gmail.com"
//   }
//   console.log(req.body.email)
//   sns.subscribe(params,(err,data)=>{
//     if(err) console.error(err)
//     res.send(data);
//   })
// })
app.post('/subscribe', (req, res) => {
  
  let params = {
      Protocol: 'EMAIL', 
      TopicArn: 'arn:aws:sns:ap-southeast-2:711960976249:offerTopic',
      Endpoint: req.body.email
  };

  sns.subscribe(params, (err, data) => {
      if (err) {
          console.log(err);
      } else {
          console.log(data);
          return res.status(201).json(data);
      }
  });
});
app.post('/publish', (req, res) => {
  let params = {
      Message: req.body.message,
      Subject: "Latest Offers",
      TopicArn: 'arn:aws:sns:ap-southeast-2:711960976249:offerTopic'
  };

  sns.publish(params, function(err, data) {
      if (err) console.log(err, err.stack); 
      else return res.status(201).json(data);
  });
});
// app.post('/publish',(req,res)=>{
//   let params={
//     Subject:'Offer',
//     Message:"teri mummy hot",
//     TopicArn:'arn:aws:sns:ap-southeast-2:711960976249:offerTopic',
//   }
//   console.log(req.body.email)
//   sns.subscribe(params,(err,data)=>{
//     if(err) console.error(err)
//     res.send(data);
//   })
// })
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
