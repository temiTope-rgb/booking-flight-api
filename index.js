const express =require("express");

const flight= require("./router/flightrouter");

const app =express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.end("Book Flight- Canada");
});

app.get("/api/bookflight", (req, res) =>{
    res.end("flight");
});

app.listen(PORT, () =>{
    console.log("server running on port ${PORT}");
});

