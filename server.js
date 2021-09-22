const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const Place = require("../model/place.js");
const cors = require("cors");
const https = require("https");
const path = require('path');

const app =express();
app.use(cors());

//app.use('/', express.static(path.join(__dirname, './my-app/build')));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb+srv://admin-budhiraja:test123@cluster0.tmm0w.mongodb.net/realEstate", {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established");
});
const placeSchema = new mongoose.Schema({
  Link:{type:String},
  Info:{type:String},
  Price:{type:String},
  Location:{type:String}
});

const Place = new mongoose.model("Place",placeSchema);

app.get("/data",function(req,res){

  Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json("Error: " + err));
});


if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
app.listen(process.env.PORT||"5000", function() {

  console.log("ser working");
});
