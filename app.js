const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let avengerArray = [
    { id:1 , name: "Thor"},
    { id:2 , name: "Hulk"},
    { id:3 , name: "Captain America"},
    { id:4 , name: "Black Widow"}
];

app.get("/",(req,res) => {
    res.send('Welcome to avengers API');
});


app.get("/api/avengers",(req,res) => {
    res.send(avengerArray);
});

// app.get("/api/avengers/1",(req,res) => {
//     res.send(avengerArray[0]);
// });

// app.get("/api/avengers/2",(req,res) => {
//     res.send(avengerArray[1]);
// });
// app.get("/api/avengers/3",(req,res) => {
//     res.send(avengerArray[2]);
// });

app.get("/api/avengers/:id",(req,res) => {
    //send avenger details for the requested id
    let requestedID =req.params.id;
    //res.send(avengerArray [requestedID]);
    let avenger = avengerArray.find(avenger => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }
   
    res.status(200).send(avenger);
});

app.put("/api/avengers/:id", (req, res) =>{
    let requestedID =req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("Avenger you are looking for does not exist on the MCU");
    }

    avenger.name = req.body.name;
    return res.send(avenger);

}); 

app.post("/api/avengers", (req,res) =>{
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

app.delete("/api/avengers/:id", (req,res) => {
    let requestedID =req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID );
    if (!avenger){
        return res.status(404).send("No avenger found");
    }

    // let DltItem = avengerArray.indexOf(avenger);
    return res.send("Deleted " + avenger);
    avengerArray.splice(avenger);   
});

app.listen(PORT, () => {
    console.log('Strarted listening on port '+PORT);
}); 