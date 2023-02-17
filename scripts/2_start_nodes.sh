#!/bin/bash

echo "Create a local Docker network..."
docker network create local-ilp

echo "Start a Redis database instance..."
docker run -d \
  --name redis \
  --network local-ilp \
  redis
# (Each service will use a different database index so they don't conflict with one another.)

echo "Launch a local Ethereum testnet with 10 prefunded accounts..."
docker run -d \
  --platform linux/amd64 \
  --name ethereum-testnet \
  --network local-ilp \
  trufflesuite/ganache-cli \
  -m "abstract vacuum mammal awkward pudding scene penalty purchase dinner depart evoke puzzle" \
  -i 1
# The mnemonic after the -m flag is provided so the keys for Alice and Bob aren't randomized, and the -i flag configures the Ethereum network ID to be the same as the Ethereum mainnet.

echo "Starting Alice's Ethereum settlement engine..."
# The provided private key corresponds to a prefunded Ethereum account in the Ganache testnet.
docker run -d \
  --platform linux/amd64 \
  --name alice-eth \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-settlement-ethereum \
  --private_key 380eb0f3d505f087e438eca80bc4df9a7faa24f868e69fc0440261a0fc0567dc \
  --confirmations 0 \
  --poll_frequency 1000 \
  --ethereum_url http://ethereum-testnet:8545 \
  --connector_url http://alice-node:7771 \
  --redis_url redis://redis:6379/0 \
  --asset_scale 9 \
  --settlement_api_bind_address 0.0.0.0:3000

echo "Starting Alice's Interledger node..."
docker run -d \
  --platform linux/amd64 \
  --name alice-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --ilp_address example.alice \
  --secret_seed 8852500887504328225458511465394229327394647958135038836332350604 \
  --admin_auth_token hi_alice \
  --redis_url redis://redis:6379/1 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap

echo "Starting Bob's Ethereum settlement engine..."
docker run -d \
  --platform linux/amd64 \
  --name bob-eth \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-settlement-ethereum \
  --private_key cc96601bc52293b53c4736a12af9130abf347669b3813f9ec4cafdf6991b087e \
  --confirmations 0 \
  --poll_frequency 1000 \
  --ethereum_url http://ethereum-testnet:8545 \
  --connector_url http://bob-node:7771 \
  --redis_url redis://redis:6379/2 \
  --asset_scale 9 \
  --settlement_api_bind_address 0.0.0.0:3000

echo "Starting Bob's XRP settlement engine..."
# The XRP settlement engine will automatically generate a prefunded testnet account and credentials from the official faucet .
docker run -d \
  --platform linux/amd64 \
  --name bob-xrp \
  --network local-ilp \
  -e "DEBUG=settlement*" \
  -e "CONNECTOR_URL=http://bob-node:7771" \
  -e "REDIS_URI=redis://redis:6379/3" \
  -e "ENGINE_PORT=3001" \
  interledgerjs/settlement-xrp

echo "Starting Bob's Interledger node..."
# Bob will pull exchange rates from the CoinCap API  for foreign exchange between ETH and XRP.
docker run -d \
  --platform linux/amd64 \
  --name bob-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --ilp_address example.bob \
  --secret_seed 1604966725982139900555208458637022875563691455429373719368053354 \
  --admin_auth_token hi_bob \
  --redis_url redis://redis:6379/4 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap


echo "Starting Charlie's XRP settlement engine..."
docker run -d \
  --platform linux/amd64 \
  --name charlie-xrp \
  --network local-ilp \
  -e "DEBUG=settlement*" \
  -e "CONNECTOR_URL=http://charlie-node:7771" \
  -e "REDIS_URI=redis://redis:6379/5" \
  -e "ENGINE_PORT=3000" \
  interledgerjs/settlement-xrp

echo "Starting Charlie's Interledger node..."
docker run -d \
  --platform linux/amd64 \
  --name charlie-node \
  --network local-ilp \
  -e "RUST_LOG=interledger=trace" \
  interledgerrs/ilp-node \
  --secret_seed 1232362131122139900555208458637022875563691455429373719368053354 \
  --admin_auth_token hi_charlie \
  --redis_url redis://redis:6379/6 \
  --http_bind_address 0.0.0.0:7770 \
  --settlement_api_bind_address 0.0.0.0:7771 \
  --exchange_rate.provider CoinCap