   const JWT = require("jsonwebtoken");

   module.exports = async (req, res, next) => {
     try {
       // Get token Bearer jhfkudjfhjkds
       const token = req.headers["authorization"].split(" ")[1];
       JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
         if (err) {
           return res.status(401).send({
             success: false,
             message: "Un-Authorize user",
           });
         } else {
           // Ensure req.body is defined
           if (!req.body) {
             req.body = {}; // Initialize req.body if it's undefined
           }
           req.body.id = decode.id;
           next();
         }
       });
     } catch (error) {
       console.log(error);
       res.status(400).send({
         success: false,
         message: "Please provide Auth token",
         error,
       });
     }
   };
   