//######### Require modules #########
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");


//######### Arrays to hold user's input #########
const items = [];
const workItems = [];


//######### GET ROUTES #########
app.get("/", function(req,res){

  const day = date.getDate();
  res.render("list", {listTitle: day, newListItems: items});
});


app.get("/work", function(req,res){

  res.render("list", {listTitle: "work list", newListItems: workItems});

});



//######### POST ROUTE #########
app.post("/", function(req,res){

  let userInput = req.body.newItem;

  if (req.body.list === "work"){
    workItems.push(userInput);
    res.redirect("/work");
  }

  else{
    items.push(userInput);
    res.redirect("/");
  }

});




app.listen(3000, function (){

  console.log("Server running");
});
