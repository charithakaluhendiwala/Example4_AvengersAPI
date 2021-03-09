const express = require("express");
const { collection, deleteOne } = require("../models/avengers");
const router = express.Router(); 
const Avenger = require("../models/avengers");

let avengerArray = [
    { id:1 , name: "Thor"},
    { id:2 , name: "Hulk"},
    { id:3 , name: "Captain America"},
    { id:4 , name: "Black Widow"}
];

router.get("/",async (req,res) => { 
    try{
        let avenger = await Avenger.find();
        return res.send(avenger);
    }catch(ex){
        return res.status(500).send("Error",ex.message);
    }
    
});

router.get("/:id",async (req,res) => {
    //send avenger details for the requested id
    let requestedID =req.params.id;
    //res.send(avengerArray [requestedID]);
    let avenger = await Avenger.findById(requestedID);
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }
    
    avenger = await avenger.save();
    return res.status(200).send(avenger);
});

router.put("/:id",async (req, res) =>{
    let requestedID =req.params.id;
    let avenger = await Avenger.findById(requestedID);
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }

    avenger.set ({likeCount: req.body.likeCount});

    avenger = await avenger.save();
    return res.send(avenger);

}); 

router.post("/", async (req,res) =>{
    if (!req.body.name) {
        return res.status(400).send("why you no send all values in the request?")
    } 

    // let newAvenger = {
    //     id : avengerArray.length + 1,
    //     name : req.body.name
    // }
    //avengerArray.push(newAvenger);

    let newavenger = new Avenger  ({
        name: req.body.name ,
        birthName: req.body.birthName,
        movies: req.body.movies ,
        likeCount : req.body.likeCount,
        imgUrl : req.body.imgUrl,
        deceased : req.body.deceased,
    });

    try{
        newavenger = await newavenger.save();
        return res.send(newavenger);
    }catch(err){
        return res.status(400).send(err.message);
    }
    
});

router.delete("/:id", async (req,res) => {
    let requestedID =req.params.id;
    let dltavenger = await Avenger.findById(requestedID);
    collection.deleteOne(dltavenger);

    // if (!dltavenger){
    //     return res.status(404).send("No avenger found");
    // }

    // let DltItem = avengerArray.indexOf(avenger);
    //return res.send("Deleted ");
    // dltavenger = await dltavenger.save();
    // return res.send(dltavenger);
});


module.exports = router;