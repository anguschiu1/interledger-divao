const axios = require("axios");
const express = require("express");
const router = express.Router();

// define route to list outgoing payments of gfranklin
router.get("/", function (req, res, next) {
  res.send(_responsePayLoad);
});
module.exports = router;

const _responsePayLoad = {
  pagination: {
    endCursor: "f6ef2fff-14a7-4d07-94ab-1440facda56c",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "f6ef2fff-14a7-4d07-94ab-1440facda56c",
  },
  result: [
    {
      id: "https://cloud-nine-wallet-backend/accounts/gfranklin/outgoing-payments/f6ef2fff-14a7-4d07-94ab-1440facda56c",
      paymentPointer: "https://cloud-nine-wallet-backend/accounts/gfranklin",
      quoteId:
        "https://cloud-nine-wallet-backend/accounts/gfranklin/quotes/f6ef2fff-14a7-4d07-94ab-1440facda56c",
      receiveAmount: {
        value: "800",
        assetCode: "USD",
        assetScale: 2,
      },
      sendAmount: {
        value: "2400",
        assetCode: "USD",
        assetScale: 2,
      },
      sentAmount: {
        value: "800",
        assetCode: "USD",
        assetScale: 2,
      },
      receiver:
        "https://happy-life-bank-backend/accounts/pfry/incoming-payments/f33fe724-c7ad-43f5-b0f9-1f38347cfef0",
      failed: false,
      externalRef: "#INV20230504-012",
      description: "Startup fund for ImpactOrgABC",
      createdAt: "2023-04-04T23:30:36.219Z",
      updatedAt: "2023-04-04T23:30:36.289Z",
    },
    {
      id: "https://cloud-nine-wallet-backend/accounts/gfranklin/outgoing-payments/f6ef2fff-14a7-4d07-94ab-1440facda56c",
      paymentPointer: "https://cloud-nine-wallet-backend/accounts/gfranklin",
      quoteId:
        "https://cloud-nine-wallet-backend/accounts/gfranklin/quotes/f6ef2fff-14a7-4d07-94ab-1440facda56c",
      receiveAmount: {
        value: "2305.22",
        assetCode: "USD",
        assetScale: 2,
      },
      sendAmount: {
        value: "2305.22",
        assetCode: "USD",
        assetScale: 2,
      },
      sentAmount: {
        value: "2305.22",
        assetCode: "USD",
        assetScale: 2,
      },
      receiver:
        "https://happy-life-bank-backend/accounts/pfry/incoming-payments/f33fe724-c7ad-43f5-b0f9-1f38347cfef0",
      failed: false,
      externalRef: "#INV20230504-012",
      description: "Top-up project: Hello Future",
      createdAt: "2023-04-05T23:30:36.219Z",
      updatedAt: "2023-04-08T23:30:36.289Z",
    },
  ],
};
