const mongoose = require("mongoose");

const avengerSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        minlength : 3,
        maxlength : 20
    },
    birthName: String,
    movies : {
        type :[String],
        enum : ["Infinity War","Endgame","Iron Man 1","First Avenger"],
        required :true,
    },
    likeCount : Number,
    imgUrl : {
        type : String,
        default: "https://i.pinimg.com/originals/e9/34/e9/e934e98cc8a4680ff43ace1910055565.jpg",

    },
    deceased : Boolean,
});

const Avenger = mongoose.model("Avenger", avengerSchema);

module.exports = Avenger;