//jshint esversion:6

const express = require ("express");

const https = require("https");

const app = express();


app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=076b372e5fec5eb4d161844fbe02b1bf&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      res.send("<h1>The temperature in Lagos is " + temp + " degrees</h1>");
    });
  });
});




app.listen(3000, function(){
  console.log("I am working");
});
