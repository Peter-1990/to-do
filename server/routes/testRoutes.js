const express = require("express");
const { testingController } = require("../controllers/testController.js");


const router = express.Router();

router.get("/", testingController);


module.exports = router