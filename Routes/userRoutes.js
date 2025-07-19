const express = require("express");
const router = express.Router();


const userContrller = require("../Controllers/userController.js");

router.get("/getUserById", userContrller.getUserById);
router.post("/createUser", userContrller.createUser);

module.exports = router;

