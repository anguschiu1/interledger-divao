#!/bin/bash

printf "\n========= ALICE'S NODE ========="
printf "\nAlice's balance: "
curl --request GET \
  --url http://localhost:7770/accounts/alice/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_alice'

printf "\nBob's balance: "
curl --request GET \
  --url http://localhost:7770/accounts/bob/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_alice'

printf "\n========= BOB'S NODE ========="
printf "\nAlice's balance: "
curl --request GET \
  --url http://localhost:8770/accounts/alice/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_bob'
printf "\nCharlie's balance: "
curl --request GET \
  --url http://localhost:8770/accounts/charlie/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_bob'

printf "\n========= CHARLIE'S NODE ========="
printf "\nBob's balance: "
curl --request GET \
  --url http://localhost:9770/accounts/bob/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_charlie'
printf "\nCharlie's balance: "
curl --request GET \
  --url http://localhost:9770/accounts/charlie/balance \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_charlie'

printf "\n========= ALICE'S NODE ========="
printf "\nAlice's SPSP information: \n"
curl --request GET \
  --url http://localhost:7770/accounts/alice/spsp \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_alice'

printf "\nExchange rates: \n"
curl --request GET \
  --url http://localhost:7770/rates \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer hi_alice'