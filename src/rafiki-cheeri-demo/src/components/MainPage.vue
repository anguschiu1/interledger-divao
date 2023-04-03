<script>
const API_URL = `http://localhost:4000/accounts/`
export default {
  data: () => ({
    accountId: 'pfry',
    commits: null
  }),
  methods: {
    async fetchData() {
      const url = `${API_URL}${this.accountId}`
      this.commits = await (await fetch(url)).json()
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Hello</h1>
    <h3>Please select action at the menu.</h3>
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
