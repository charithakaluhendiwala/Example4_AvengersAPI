const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authentacation =require("./middleware/authentication");
const emailsending = require("./middleware/emailsending");
const users = require("./routes/users");
const app = express();
const PORT = process.env.PORT;


mongoose.connect("mongodb+srv://root:<root>@avengers.wwzyu.mongodb.net/avengerDb?retryWrites=true&w=majority", {   
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }
)
    .then(() => console.log("connected to db successfully ... "))
    .catch((err) => 
        console.log("Error has occured while connecting to DB :", err)
    );

const avengers = require ("./routes/avengers");
const home = require ("./routes/home");

app.use(cors());
app.use(express.json());
app.use(authentacation);
app.use(emailsending); 

app.use("/", home);
app.use("/api/users", users);
app.use("/api/avengers", avengers);


app.listen(PORT, () => {
    console.log('Strarted listening on port '+PORT);
}); 