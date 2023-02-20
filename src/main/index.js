import axios from "axios";

const options = {
  method: "GET",
  url: "http://localhost:7770/accounts",
  params: { "": "" },
  headers: { Accept: "application/json", Authorization: "Bearer hi_alice" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
