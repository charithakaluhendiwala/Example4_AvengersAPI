const express = require("express");
const authentacation =require("./middleware/authentication");
const emailsending = require ("./middleware/emailsending");
const app = express();
const PORT = 3000;

const avengers = require ("./routes/avengers");
const home = require ("./routes/home");

app.use(express.json());
app.use(authentacation);
app.use(emailsending);

app.use("/api/avengers1",avengers)
app.use("/",home);

app.listen(PORT, () => {
    console.log('Strarted listening on port '+PORT);
}); 