#!/bin/bash

alice_cli="docker run --platform linux/amd64 --rm --network local-ilp interledgerrs/ilp-cli --node http://alice-node:7770"
bob_cli="docker run --platform linux/amd64 --rm --network local-ilp interledgerrs/ilp-cli --node http://bob-node:7770"
charlie_cli="docker run --platform linux/amd64 --rm --network local-ilp interledgerrs/ilp-cli --node http://charlie-node:7770"

echo "Creating Alice's account..."
$alice_cli accounts create alice \
  --auth hi_alice \
  --ilp-address example.alice \
  --asset-code ETH \
  --asset-scale 9 \
  --ilp-over-http-incoming-token alice_password

echo "Creating the Alice ⇋ Bob account on Alice's node (ETH, peer relation)..."
# After more than 0.0001 ETH is fulfilled from Alice to Bob (settle-threshold), Alice will settle the entire liability with Bob (settle-to).
$alice_cli accounts create bob \
  --auth hi_alice \
  --ilp-address example.bob \
  --asset-code ETH \
  --asset-scale 9 \
  --settlement-engine-url http://alice-eth:3000 \
  --ilp-over-http-incoming-token bob_password \
  --ilp-over-http-outgoing-token alice_password \
  --ilp-over-http-url http://bob-node:7770/accounts/alice/ilp \
  --settle-threshold 100000 \
  --settle-to 0 \
  --routing-relation Peer

echo "Creating the Alice ⇋ Bob account on Bob's node (ETH, peer relation)..."
# Bob enforces that Alice will not owe him greater than 0.00015 ETH (min-balance). After that, she must settle to send additional ILP packets.
$bob_cli accounts create alice \
  --auth hi_bob \
  --ilp-address example.alice \
  --asset-code ETH \
  --asset-scale 9 \
  --max-packet-amount 100000 \
  --settlement-engine-url http://bob-eth:3000 \
  --ilp-over-http-incoming-token alice_password \
  --ilp-over-http-outgoing-token bob_password \
  --ilp-over-http-url http://alice-node:7770/accounts/bob/ilp \
  --min-balance -150000 \
  --routing-relation Peer

echo "Creating the Bob ⇋ Charlie account on Bob's node (XRP, child relation)..."
# After 0.01 XRP is fulfilled from Bob to Charlie (settle-threshold), Bob will settle the full liability plus prepay Charlie 1 XRP (settle-to).
$bob_cli accounts create charlie \
  --auth hi_bob \
  --asset-code XRP \
  --asset-scale 6 \
  --settlement-engine-url http://bob-xrp:3001 \
  --ilp-over-http-incoming-token charlie_password \
  --ilp-over-http-outgoing-token bob_other_password \
  --ilp-over-http-url http://charlie-node:7770/accounts/bob/ilp \
  --settle-threshold 10000 \
  --settle-to -1000000 \
  --routing-relation Child

echo "Creating the Bob ⇋ Charlie account on Charlie's node (XRP, parent relation)..."
# Charlie enforces that Bob will not owe him greater than 0.05 XRP (min-balance). After that, he must settle to send additional ILP packets.
$charlie_cli accounts create bob \
  --auth hi_charlie \
  --ilp-address example.bob \
  --asset-code XRP \
  --asset-scale 6 \
  --settlement-engine-url http://charlie-xrp:3000 \
  --ilp-over-http-incoming-token bob_other_password \
  --ilp-over-http-outgoing-token charlie_password \
  --ilp-over-http-url http://bob-node:7770/accounts/charlie/ilp \
  --min-balance -50000 \
  --routing-relation Parent

echo "Creating Charlie's account..."
$charlie_cli accounts create charlie \
  --auth hi_charlie \
  --asset-code XRP \
  --asset-scale 6 \
  --ilp-over-http-incoming-token charlie_password
