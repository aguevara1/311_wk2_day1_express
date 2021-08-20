
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const theUsers = require("./state")
app.use(bodyParser.json());

const port = process.env.PORT || 4000



/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  let onlyUsers=theUsers['users'];
  res.json(onlyUsers);
 })


 app.get('/users/1', (req, res) => {
  let onlyUsers=theUsers['users'];
  res.json(onlyUsers[0]);
 })



 app.post('/users', (req, res) => {
  let onlyUsers1=theUsers['users'];

  let counter=0;
onlyUsers1.forEach(p=> {
  if(p._id){
         counter++;
    }
});

  req.body={id:counter+1,name:"martha stewart",
  occupation:"writer" };

  let addedUser=req.body;
  onlyUsers1.push(addedUser);

  res.json(onlyUsers1);
 })


 app.put('/users/1', (req, res) => {
  let onlyUsers=theUsers['users'];

  onlyUsers[0].name= "john";
  onlyUsers[0].occupation= "carpenter";
  res.json(onlyUsers[0]);
  
 })

 app.delete('/users/1', (req, res) => {
  let onlyUsers=theUsers['users'];

    let newArray=onlyUsers.shift();

 // res.json(newArray);
  res.send("deleted");
  
 })

 app.get('/users/:userId', (req, res) => {
  let onlyUsers=theUsers['users'];

   let theOne=onlyUsers.find(p => p._id==req.params.userId);

  res.json(theOne);
 })

 app.put('/users/:userId', (req, res) => {
  let onlyUsers=theUsers['users'];

   let theOne=onlyUsers.find(p => {
    if(p._id==req.params.userId){
        return p.name="Scooby";  
     }  
    });

  res.json(theOne);
 })


 app.delete('/users/:userId', (req, res) => {
  let onlyUsers=theUsers['users'];

   let theOne=onlyUsers.find(p => {
      if(p._id==req.params.userId){
         return p.isActive="false";  
       }  
    });

  res.send("deleted");
 })


/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))