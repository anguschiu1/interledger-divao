const axios = require("axios");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const backendUrl = `http://google.com`;
  const config = {
    headers: req.headers,
  };
  // return the data without modification
  axios.get(backendUrl, config).then((response) => res.send(response.data));
});

module.exports = router;
