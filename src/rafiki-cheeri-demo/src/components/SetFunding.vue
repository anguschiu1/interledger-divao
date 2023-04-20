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
    <h3>Please select amount to send:</h3>
    <h3>
      <input type="range" min="0" max="10000" step="1" v-model="amount" />
      <input type="text" v-model="amount" />
      <button @click="Send()">Send money</button>
    </h3>
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
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
