<script>
export default {
  props: {
    amount: { type: String, required: true }
  },
  methods: {
    SendMoney() {
      this.$router.push({ path: '/' })
    },
    ReturnToMainPage() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<template>
  <div class="greetings">
    <h2 class="green">{{ parseInt(this.amount) || 'Nothing' }} will be sent to ABC, confirm?</h2>
    <h3>
      <button :disabled="false" @click="SendMoney">OK</button>
      <button :disabled="false" @click="ReturnToMainPage">Cancel</button>
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
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
