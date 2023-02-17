#!/bin/bash

echo "Create a local Docker network..."
docker network create local-ilp

echo "Start a Redis database instance..."
docker run -d \
  --name redis \
  --network local-ilp \
  redis
# (Each service will use a different database index so they don't conflict with one another.)

echo "Launch a local Ethereum testnet with 10 prefunded accounts to use as a settlement ledger between Alice and Bob..."
docker run -d \
  --platform linux/amd64 \
  --name ethereum-testnet \
  --network local-ilp \
  trufflesuite/ganache-cli \
  -m "abstract vacuum mammal awkward pudding scene penalty purchase dinner depart evoke puzzle" \
  -i 1
# The mnemonic after the -m flag is provided so the keys for Alice and Bob aren't randomized, and the -i flag configures the Ethereum network ID to be the same as the Ethereum mainnet.