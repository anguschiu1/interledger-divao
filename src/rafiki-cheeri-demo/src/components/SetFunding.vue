<script>
export default {
  data() {
    return {
      amount: 0
    }
  },
  methods: {
    Send() {
      this.$router.push({ name: 'confirm.funding', params: { amount: this.amount } })
    }
  }
}
</script>
<template>
  <div class="greetings">
    <h1 class="green">Setup Payment</h1>
    Amount:
    <input type="range" min="0" max="100" step="1" v-model="amount" />
    <input type="text" v-model="amount" />
    <button @click="Send()">Send money</button>
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
