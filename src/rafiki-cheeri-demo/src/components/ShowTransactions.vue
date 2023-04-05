<script>
const API_URL = `http://localhost:3000/accounts/`
export default {
  props: {
    accountId: { type: String, required: true },
    paymentType: { type: String, required: true }
  },
  data: () => ({
    commits: null,
    _responsePayLoad: {
      pagination: {
        endCursor: 'f6ef2fff-14a7-4d07-94ab-1440facda56c',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'f6ef2fff-14a7-4d07-94ab-1440facda56c'
      },
      result: [
        {
          id: 'https://cloud-nine-wallet-backend/accounts/gfranklin/outgoing-payments/f6ef2fff-14a7-4d07-94ab-1440facda56c',
          paymentPointer: 'https://cloud-nine-wallet-backend/accounts/gfranklin',
          quoteId:
            'https://cloud-nine-wallet-backend/accounts/gfranklin/quotes/f6ef2fff-14a7-4d07-94ab-1440facda56c',
          receiveAmount: {
            value: '3364',
            assetCode: 'USD',
            assetScale: 2
          },
          sendAmount: {
            value: '3565',
            assetCode: 'USD',
            assetScale: 2
          },
          sentAmount: {
            value: '0',
            assetCode: 'USD',
            assetScale: 2
          },
          receiver:
            'https://happy-life-bank-backend/accounts/pfry/incoming-payments/f33fe724-c7ad-43f5-b0f9-1f38347cfef0',
          failed: false,
          externalRef: '#INV2022-8363828',
          description: 'Your purchase at Shoe Shop',
          createdAt: '2023-04-04T23:30:36.219Z',
          updatedAt: '2023-04-04T23:30:36.289Z'
        },
        {
          id: 'https://cloud-nine-wallet-backend/accounts/gfranklin/outgoing-payments/f6ef2fff-14a7-4d07-94ab-1440facda56c',
          paymentPointer: 'https://cloud-nine-wallet-backend/accounts/gfranklin',
          quoteId:
            'https://cloud-nine-wallet-backend/accounts/gfranklin/quotes/f6ef2fff-14a7-4d07-94ab-1440facda56c',
          receiveAmount: {
            value: '3364',
            assetCode: 'USD',
            assetScale: 2
          },
          sendAmount: {
            value: '3565',
            assetCode: 'USD',
            assetScale: 2
          },
          sentAmount: {
            value: '0',
            assetCode: 'USD',
            assetScale: 2
          },
          receiver:
            'https://happy-life-bank-backend/accounts/pfry/incoming-payments/f33fe724-c7ad-43f5-b0f9-1f38347cfef0',
          failed: false,
          externalRef: '#INV2022-8363828',
          description: 'Your purchase at Shoe Shop',
          createdAt: '2023-04-04T23:30:36.219Z',
          updatedAt: '2023-04-04T23:30:36.289Z'
        }
      ]
    }
  }),
  methods: {
    async fetchData() {
      var url = `${API_URL}${this.accountId}/${this.paymentType}?first=10`
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'GNAP 12E8617265EBB06035FC')
      myHeaders.append('Host', 'cloud-nine-wallet-backend')
      myHeaders.append('accept', 'application/json')
      myHeaders.append('Signature-Input', 'SIGNATUREINPUT')
      myHeaders.append('Signature', 'SIGNATURE')

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }

      await fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h3>
      {{ this.paymentType == 'outgoing-payments' ? 'Outgoing Payment' : 'Incoming Payment' }}
      Transactions of accounts "{{ this.accountId }}" is shown here.
    </h3>
    <ul>
      <li
        v-for="{ id, sendAmount, sentAmount, externalRef } in this._responsePayLoad.result"
        :key="id"
      >
        {{ externalRef }} | Target to send: {{ sendAmount.assetCode }}{{ sendAmount.value }} |
        Actual sent: {{ sentAmount.assetCode }}{{ sentAmount.value }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
