const axios = require("axios");
const express = require("express");
const router = express.Router();
const resPayLoad = require("../data/list_out_txns.json");

// define route to list outgoing payments of gfranklin
router.get("/", function (req, res, next) {
  res.send(resPayLoad);
});
module.exports = router;
