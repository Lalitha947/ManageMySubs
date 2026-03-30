const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

console.log("Auth routes loading...");

router.post("/register", (req, res, next) => {
  console.log("POST /register called");
  register(req, res, next);
});
router.post("/login", login);

module.exports = router;
