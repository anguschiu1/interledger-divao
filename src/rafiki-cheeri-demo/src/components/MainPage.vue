<script>
export default {
  data: () => ({
    accountId: 'gfranklin',
    commits: null
  }),
  methods: {
    setupFundPayment() {
      this.$router.push({ name: 'set.funding' })
    },
    showTxns() {
      this.$router.push({
        name: 'show.txns',
        params: { accountId: this.accountId, paymentType: 'outgoing-payments' }
      })
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h3>Please select action at the menu.</h3>
    <button type="button" @click="setupFundPayment">Setup Fund Payment</button>
    <button type="button" @click="showTxns">Show Transactions</button>
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
