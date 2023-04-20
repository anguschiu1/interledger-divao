const axios = require("axios");
const express = require("express");
const router = express.Router();
const resPayLoad = require("../data/create_op.json");

// define route to create outgoing payment from gfranklin to pfry
router.get("/", function (req, res, next) {
  res.send(resPayLoad);
});
module.exports = router;
