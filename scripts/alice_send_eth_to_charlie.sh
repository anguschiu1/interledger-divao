#!/bin/bash

echo "Sending 200000 gwei to Charlie.."
alice_cli="docker run --platform linux/amd64 --rm --network local-ilp --platform linux/amd64 interledgerrs/ilp-cli --node http://alice-node:7770"

$alice_cli pay alice \
  --auth alice_password \
  --amount 200000 \
  --to http://charlie-node:7770/accounts/charlie/spsp