<script>
import { onMounted } from 'vue'

const API_URL = `http://localhost:8080/gfranklinpp`
export default {
  props: {
    accountId: { type: String, required: true }
  },
  data: () => ({
    commits: null,
    fetchedData: null
  }),
  created() {
    // this.fetchData()
  },
  methods: {
    async fetchData() {
      var url = `${API_URL}`

      const options = {
        method: 'GET',
        headers: { accept: 'application/json', Host: 'cloud-nine-wallet-backend' },
        mode: 'cors'
      }

      // var myHeaders = new Headers()
      // myHeaders.append('Host', 'cloud-nine-wallet-backend')
      // myHeaders.append('Accept', 'application/json')

      // var requestOptions = {
      //   method: 'GET',
      //   headers: myHeaders
      // }

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
    <h3 v-if="this.fetchedData == null">
      Payment Pointer Transactions of accounts "gfranklin" should be shown here.
    </h3>
    <table v-if="this.fetchedData !== null" class="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Payment Pointer</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ this.fetchedData.publicName }}</td>
          <td>{{ this.fetchedData.id ? this.fetchedData.id : '' }}</td>
          <td>{{ this.fetchedData.assetCode ? this.fetchedData.assetCode : '' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="fetchURL" v-show="!fetchedData">
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
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
