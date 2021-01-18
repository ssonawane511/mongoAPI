const express = require('express');
const path = require('path');
// // import { nanoid } from "nanoid";
// const nanoid = require('./utils');

const { nanoid } = require('nanoid');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Todo = require('./models/todo')
const app = express();


mongoose.connect("mongodb://localhost/practice");

app.use(bodyParser.json());
app.use('/',express.static(path.resolve(__dirname,'assets/')));


// CREATE API 
app.post("/api/create", async (req, res) => {
    let record = req.body;
    record["taskId"] = nanoid(5);
    record["isCompleted"] = false; 
    console.log(record);
  // response from mongodb server 
   const response =  await Todo.create(record);
   console.log(response);
  res.json({
    status: "ok",
  });
});

app.get("/api/get", async (req,res) => {

  const records = await Todo.find();
  // console.log(records);
  res.json({
    records
  })
})


app.post("/api/completed", async (req, res)=> {

const {taskId} = req.body;
const record = await Todo.updateOne({ taskId }, { isCompleted: true });  
console.log(record);


})

app.listen(13371,()=>{
    console.log(`server up at localhost:13371`);

})