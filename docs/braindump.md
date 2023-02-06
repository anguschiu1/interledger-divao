**On Rafiki.money (Defunct, on maintainence)**

```
curl --location --request GET 'https://hermes-rest.ilpv4.dev/accounts/$rafiki.money/p/module_onset0j@icloud.com/balance' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}'
```

```
# Property Value
1 username user_wsuw37ta
2 ilpOverHttpUrl https://jc.ilpv4.dev/accounts/user_wsuw37ta/ilp
3 authToken MHDjk22Yz8Gsi
4 paymentPointer $jc.ilpv4.dev/user_wsuw37ta
5 assetCode XRP
6 assetScale 9
```

```
curl --location \
--request POST 'https://hermes-rest.ilpv4.dev/accounts/user_wsuw37ta/pay' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer MHDjk22Yz8Gsi' \
--data-raw '{
"amount": "1000000",
"destinationPaymentPointer": "$rafiki.money/p/module_onset0j@icloud.com"
}'
```

```
# Property Value
1 username user_1nyn8ylk
2 ilpOverHttpUrl https://jc.ilpv4.dev/accounts/user_1nyn8ylk/ilp
3 authToken owxuFFqW56T59
4 paymentPointer $jc.ilpv4.dev/user_1nyn8ylk
5 assetCode XRP
6 assetScale 9
```

Vineel Reddy16:05

- Day 1 — https://www.youtube.com/watch?v=Whp4RfW3K_U
- Day 2 — https://www.youtube.com/watch?v=85OXEcWrATI
  https://www.flickr.com/photos/interledger/collections/72157721324194522/
  Chris Lawrence16:07
  For the videos, here is a doc that gives the timestamps for each talk: https://docs.google.com/document/d/1tce0Dd3_gDNJXe6i03DhdYU1qcYStVpCCtY7u2kSN_o/edit#heading=h.x7pdmjwpmeqt
  Vineel Reddy16:08
  https://interledger-foundation.breezy.hr/
  Chris Lawrence16:08
  Here are ILP Summit reflection blog posts, aggregated: https://community.interledger.org/t/travelgrantreports

Uchi Uchibeke16:11

- https://contenthub.coil.com/content/coming-soon-an-interledger-peer-to-peer-network-tweet
- https://dassie.land/
