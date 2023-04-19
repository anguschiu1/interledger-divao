import { createUnauthenticatedClient } from "@interledger/open-payments";

async function getPaymentPointer() {
  const client = await createUnauthenticatedClient({
    requestTimeoutMs: 1000, // optional, defaults to 5000
  });

  const paymentPointer = await client.paymentPointer.get({
    url: "http://localhost:4000/accounts/pfry",
  });

  return paymentPointer;
}
getPaymentPointer();
