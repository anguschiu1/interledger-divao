const express = require("express");
const cors = require("cors");
const axios = require("axios");

const indexRouter = require("./routes/index");
const gfranklinppRouter = require("./routes/gfranklinpp");
const gfranklinppkeyRouter = require("./routes/gfranklinppkey");
const googleRouter = require("./routes/google");
const createIRRouter = require("./routes/create_ir");
const listOTRouter = require("./routes/list_out_txns");

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

// define route to acquire google search
app.use("/google", googleRouter);

// define route to acquire payment pointer keys of gfranklin
app.use("/gfranklinpp", gfranklinppRouter);

// define route to acquire payment pointer keys of gfranklin
app.use("/gfranklinppkey", gfranklinppkeyRouter);

// define route to grant incoming payments request for pfry
app.use("/createir", createIRRouter);

// define route to list outgoing payments of gfranklin
app.use("/list_out_txns", listOTRouter);

app.all("*", function (req, res) {
  res.send("Sorry resource not found");
});

// console listening port message
app.listen(port, () => {
  console.log(`Proxy app listening at http://localhost:${port}`);
});
