<script>
const API_URL = `http://localhost:8080/list_out_txns/`
export default {
  props: {
    accountId: { type: String, required: true },
    paymentType: { type: String, required: true }
  },
  data: () => ({
    commits: null,
    fetchedData: null
  }),
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      var url = `${API_URL}`

      const options = {
        method: 'GET'
      }

      await fetch(url, options)
        .then((response) => response.text())
        .then((result) => {
          this.fetchedData = JSON.parse(result)
          console.log(result)
        })
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
    <table v-if="this.fetchedData !== null" class="styled-table">
      <thead>
        <tr>
          <th>Send to</th>
          <th>Description</th>
          <th>Creation date</th>
          <th>Target to send</th>
          <th>Actual sent</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ id, sendAmount, sentAmount, externalRef, description, createdAt } in this
            .fetchedData.result"
          :key="id"
        >
          <td>{{ externalRef }}</td>
          <td>{{ description }}</td>
          <td>{{ createdAt }}</td>
          <td>{{ sendAmount.value }}{{ sendAmount.assetCode }}</td>
          <td>{{ sentAmount.value }}{{ sentAmount.assetCode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="fetchURL">
    <button @click="fetchData">Fetch Data</button>
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
