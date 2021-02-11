function authentacation (req,res,next) {
    console.log("Authentication Middleware : Executing ..... ");
    next();
}

module.exports = authentacation