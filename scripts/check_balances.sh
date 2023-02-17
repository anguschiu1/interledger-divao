#!/bin/bash

alice_cli="docker run --platform linux/amd64 --rm --network local-ilp --platform linux/amd64 interledgerrs/ilp-cli --node http://alice-node:7770"
bob_cli="docker run --platform linux/amd64 --rm --network local-ilp interledgerrs/ilp-cli --node http://bob-node:7770"
charlie_cli="docker run --platform linux/amd64 --rm --network local-ilp interledgerrs/ilp-cli --node http://charlie-node:7770"

printf "\n========= ALICE'S NODE ========="
printf "\nAlice's balance: "
$alice_cli accounts balance alice --auth hi_alice
printf "Bob's balance: "
$alice_cli accounts balance bob --auth hi_alice

printf "\n========= BOB'S NODE ========="
printf "\nAlice's balance: "
$bob_cli accounts balance alice --auth hi_bob
printf "Charlie's balance: "
$bob_cli accounts balance charlie --auth hi_bob

printf "\n========= CHARLIE'S NODE ========="
printf "\nBob's balance: "
$charlie_cli accounts balance bob --auth hi_charlie
printf "Charlie's balance: "
$charlie_cli accounts balance charlie --auth hi_charlie