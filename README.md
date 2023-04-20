# README

- [x] Basic testnet wallet operation
- [x] Outline the structure of a ILP-enabled web app
- [x] Understand and deploy moneyd and start a local testnet
- [x] Spin up local ILP network (using interledger-rs)
- [x] Try out [Interledger-rs API Specification](https://app.swaggerhub.com/apis/interledger-rs/Interledger/1.1) locally
- [x] Spin up [Rafiki](https://github.com/interledger/rafiki) on local environment
- [x] Understand and make use of Open payment paradigm on Rafiki deployment
- [x] Establish eCommerce demo local environment
- [x] Execute eCommerce local demo using API
- [x] Refresh Open Payment eCommerce demo flow and [instructions](rafiki-divao-demo/demo-playbook.md)
- [x] (proposing) Demo Cheeri webapp [Sequence diagram](rafiki-divao-demo/demo-Cheeri.md) using Open Payment
- [x] [HL sequence diagram](rafiki-divao-demo/cheeri-AP.md) about Cheeri incorporate with AgnostiPay
- [x] Demo web app front-end UI prototype
- [x] Connect demo web app to Demo Open Payment using Rafiki deployment
- [x] Trial locally build and deploy Open Payment backend as packages, got reply from [Rafiki](https://github.com/interledger/rafiki/issues/1217) team

## Open Payment API

1. Sample code can be found [here](https://github.com/interledger/rafiki/tree/main/packages/open-payments).
2. (TODO) In addition to "pull" type transaction, Open Payment API should also support "push" type transaction.

## Demo details

Please refers here to see an example using [Rafiki stack](./rafiki-divao-demo/demo-playbook.md)

## Running Cheeri-OpenPayment demo web app on local

1. Please ensure Rafiki local environment is running. For details, please follow the instructions in [Rafiki local playground setup](https://github.com/interledger/rafiki/tree/main/localenv#readme) to install two ILP nodes, (a.k.a. account service provider)
2. On `src/rafiki-cheeri-demo` folder, run `npm i` and then run `npm run dev`
3. On `src/rafiki-cheeri-demo-backend` folder, run `npm start` to start up demo backend express.js server. The service port is `8080`
4. Visit the front end by `http://localhost:5173/`

---

---

### (Documentation below this line belongs to effort about deprecated implementations and are discarded)

Please rollback past commit to see previous study about Interledgerrs, moneyd, ILP-connector, etc.
