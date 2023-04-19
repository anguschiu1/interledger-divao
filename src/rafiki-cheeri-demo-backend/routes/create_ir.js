var express = require("express");
var router = express.Router();
const axios = require("axios");
const url = require("url");

// Grant request incoming payment to the backend server
router.get("/", function (req, res, next) {
  // prepare signature for grant request (preRequestSignaturesGrantRequest)
  // Get Client JWK
  const backendUrl = "http://localhost:4000/accounts/pfry/jwks.json";
  const myHeaders = {
    Accept: "application/json",
    Host: "happy-life-bank-backend",
  };
  const config = {
    headers: myHeaders,
  };
  console.log(`Config for acquiring JWKS: ${JSON.stringify(config)}`);

  axios.get(backendUrl, config).then((response) => {
    const keyId = response.data.keys[0].kid;
    console.log(`keyId: ${keyId}`);

    const signingHeaders = {
      "content-type": "application/json",
      Host: "localhost:3041",
    };
    const signingBody = {
      access_token: {
        access: [
          {
            type: "incoming-payment",
            actions: ["create", "read", "list", "complete"],
          },
        ],
      },
      client: "https://happy-life-bank-backend/accounts/pfry",
      interact: {
        start: ["redirect"],
        finish: {
          method: "redirect",
          uri: "http://localhost:3030/mock-idp/fake-client",
          nonce: "123",
        },
      },
    };

    console.log(`signingBody: ${JSON.stringify(signingBody)}`);
    // Request Signature Headers
    const signatureURL = "http://localhost:3041/";
    const signatureHeaders = {
      "Content-Type": "application/json",
    };
    const signaturePayload = {
      keyId: keyId,
      request: {
        url: "http://localhost:4006/",
        method: "POST",
        headers: {},
        body: JSON.stringify(signingBody),
      },
    };

    console.log(`signatureURL: ${signatureURL}`);
    console.log(`signaturePayload: ${JSON.stringify(signaturePayload)}`);
    console.log(`signatureHeaders: ${JSON.stringify(signatureHeaders)}`);
    axios
      .post(signatureURL, signaturePayload, {
        headers: { signatureHeaders },
      })
      .then((signedRes) => {
        // Send grant request to auth server
        axios
          .post("http://localhost:4006/", signingBody, {
            headers: signedRes.data,
          })
          .then((grantRes) => {
            res.send(grantRes.data);
          });
      });
  });

  // create incoming request

  // res.send("Hello World!");
});

module.exports = router;
