const express = require("express");
const router = express.Router(); 

let avengerArray = [
    { id:1 , name: "Thor"},
    { id:2 , name: "Hulk"},
    { id:3 , name: "Captain America"},
    { id:4 , name: "Black Widow"}
];

router.get("/",(req,res) => { 
    res.send(avengerArray);
});

router.get("/:id",(req,res) => {
    //send avenger details for the requested id
    let requestedID =req.params.id;
    //res.send(avengerArray [requestedID]);
    let avenger = avengerArray.find(avenger => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }
   
    res.status(200).send(avenger);
});

router.put("/:id", (req, res) =>{
    let requestedID =req.params.id;
    let avenger = avengerArray.find(avenger  => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }

    avenger.name = req.body.name;
    return res.send(avenger);

}); 

router.post("/", (req,res) =>{
    if (!req.body.name) {
        return res.status(400).send("why you no send all values in the request?")
    }

    let newAvenger = {
        id : avengerArray.length + 1,
        name : req.body.name
    }
    avengerArray.push(newAvenger);
    return res.send(newAvenger);
});

router.delete("/:id", (req,res) => {
    let requestedID =req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("No avenger found");
    }

    // let DltItem = avengerArray.indexOf(avenger);
    return res.send("Deleted " + avenger);
    avengerArray.splice(avenger,1);   
});


module.exports = router;