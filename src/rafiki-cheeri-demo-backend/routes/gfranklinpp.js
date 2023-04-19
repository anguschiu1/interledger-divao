const axios = require("axios");
const express = require("express");
const router = express.Router();

// define route to acquire payment pointer of gfranklin
router.get("/", function (req, res, next) {
  const backendUrl = "http://localhost:3000/accounts/gfranklin";
  const myHeaders = {
    Accept: "application/json",
    Host: "cloud-nine-wallet-backend",
  };
  const config = {
    headers: myHeaders,
  };
  console.log(`axios config: config: ${JSON.stringify(config)}`);

  // return the data without modification
  axios.get(backendUrl, config).then((response) => res.send(response.data));
});
module.exports = router;
