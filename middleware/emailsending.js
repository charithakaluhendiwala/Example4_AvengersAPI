function emailsend (req,res,next)  {
    console.log("Email sending Middleware : Executing ..... ")
    next();
}

module.exports = emailsend