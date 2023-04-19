<script>
const API_URL = `http://localhost:8080/gfranklinpp`
export default {
  props: {
    accountId: { type: String, required: true }
  },
  data: () => ({
    commits: null,
    fetchedData: null
  }),
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
          this.fetchedData = result
          console.log(result)
        })
        .catch((error) => console.log('error', error))
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h3 v-show="fetchedData">
      Payment Pointer Transactions of accounts "gfranklin" is shown here.
    </h3>
    {{ this.fetchedData }}
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
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
</style>
