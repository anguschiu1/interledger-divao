const express = require("express");
const cors = require("cors");
const axios = require("axios");

const indexRouter = require("./routes/index");
const gfranklinppRouter = require("./routes/gfranklinpp");
const gfranklinppkeyRouter = require("./routes/gfranklinppkey");
const createIRRouter = require("./routes/create_ir");
const listOTRouter = require("./routes/list_out_txns");
const createOPRouter = require("./routes/create_op");

// use cors as proxy
const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

// log request response express middleware
app.use((req, res, next) => {
  console.log(`REQUEST header (req.headers): ${JSON.stringify(req.headers)}`);
  console.log(`REQUEST url (req.url): ${req.url}`);
  next();
});

// define default route
app.use("/", indexRouter);

// define route to acquire payment pointer keys of gfranklin
app.use("/gfranklinpp", gfranklinppRouter);

// define route to acquire payment pointer keys of gfranklin
app.use("/gfranklinppkey", gfranklinppkeyRouter);

// define route to grant incoming payments request for pfry
app.use("/create_ir", createIRRouter);

// define route to list outgoing payments of gfranklin
app.use("/list_out_txns", listOTRouter);

// define route to create outgoing payments of gfranklin
app.use("/create_op", createOPRouter);

app.all("*", function (req, res) {
  res.send("Sorry resource not found");
});

// console listening port message
app.listen(port, () => {
  console.log(`Proxy app listening at http://localhost:${port}`);
});
