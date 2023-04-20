const request = require("supertest");
const baseURL = "http://localhost:8080";
const _ = require("lodash");

describe("GET /granklinpp", () => {
  const paymentPointer = require("./data/gfranklinpp.json");
  it("should return 200", async () => {
    const response = await request(baseURL).get("/gfranklinpp");
    expect(response.statusCode).toBe(200);
  });
  it("should query resource server and return correct payment pointer of gfranklin", async () => {
    const response = await request(baseURL).get("/gfranklinpp");
    expect(_.isEqual(response.body, paymentPointer)).toBe(true);
  });
});

describe("GET /granklinppkey", () => {
  const paymentPointerKey = require("./data/gfranklinppkey.json");
  it("should return 200", async () => {
    const response = await request(baseURL).get("/gfranklinppkey");
    expect(response.statusCode).toBe(200);
  });
  it("should query resource server and return correct JWKS of gfranklin", async () => {
    const response = await request(baseURL).get("/gfranklinppkey");
    expect(_.isEqual(response.body, paymentPointerKey)).toBe(true);
  });
});

describe("GET /list_out_txns", () => {
  const list_out_txns = require("./data/list_out_txns.json");
  it("should return 200", async () => {
    const response = await request(baseURL).get("/list_out_txns");
    expect(response.statusCode).toBe(200);
  });
  it("should return sample outgoing txns ", async () => {
    const response = await request(baseURL).get("/list_out_txns");
    expect(_.isEqual(response.body, list_out_txns)).toBe(true);
  });
});

describe("GET /create_ir", () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/create_ir");
    expect(response.statusCode).toBe(200);
  });
  it("should query auth server and return GNAP incoming payment request grant token", async () => {
    const granted_actions = ["create", "read", "list", "complete"];
    const response = await request(baseURL).get("/create_ir");
    expect(
      _.isEqual(response.body.access_token.access[0].actions, granted_actions)
    ).toBe(true);
  });
});

describe("GET /create_op", () => {
  const create_op = require("./data/create_op.json");
  it("should return 200", async () => {
    const response = await request(baseURL).get("/create_op");
    expect(response.statusCode).toBe(200);
  });
  it("should return sample outgoing payment request ", async () => {
    const response = await request(baseURL).get("/create_op");
    expect(_.isEqual(response.body, create_op)).toBe(true);
  });
});
