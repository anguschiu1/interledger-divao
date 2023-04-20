<script>
const API_URL = `http://localhost:8080/create_op`
export default {
  props: {
    amount: { type: String, required: true }
  },
  data: () => ({
    commits: null,
    fetchedData: null
  }),

  methods: {
    SendMoney() {
      this.fetchData()
    },
    ReturnToMainPage() {
      this.$router.push({ path: '/' })
    },
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
  <div>
    <h2>{{ parseInt(this.amount) || 'Nothing' }} will be sent to organization "Hello Future".</h2>
    <h3 v-if="this.fetchedData == null">
      <button v-if="parseInt(this.amount)" class="confirmFund" :disabled="false" @click="SendMoney">
        Send
      </button>
      <button :disabled="false" @click="ReturnToMainPage">Cancel</button>
    </h3>
    <div v-if="this.fetchedData !== null" class="fetchURL">
      <div>Fund transfering initiated.</div>
      Reference:
      {{ this.fetchedData.receiver }}
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

confirmFund h1,
h3 {
  text-align: center;
}
.confirmFund:hover {
  background-color: rgb(255, 1, 1);
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
