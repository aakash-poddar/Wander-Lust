    const express = require("express");
    const  app =  express();
    const mongoose = require("mongoose");
    const Listing = require("./models/listing");

    const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

    main().then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })

    async function main(){
        await mongoose.connect(MONGO_URL);
    }


    app.get("/", (req,res) =>{
        res.send("I am root");
    });

    app.get("/testListing" ,async (req,res)=>{
        const sampleListing =new Listing({
            title : "My new villa",
            description : "By the beach",
            image : "",
            price : 1200,
            location : "Calangute Goa",
            country : "India",

        });
        await sampleListing.save();
        console.log("sample was saved");
        res.send("successfull test");
    })


    app.listen(8080,()=>{
        console.log("server is listing to port 8080");
    })