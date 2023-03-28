<script>
import ConfirmFunding from './ConfirmFunding.vue'
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    Send() {
      this.message = 'sending money...'
    }
  },
  components: { ConfirmFunding }
}
</script>
<template>
  <div class="greetings">
    <h1 class="green">Fund setup</h1>
    <h3>
      Amount:
      <input type="range" min="0" max="100" step="1" v-model="value" />
      <input type="number" v-model="value" />
      <button @click="value++">Value set to {{ value }}</button>
      <button @click="Send()">Send money</button>
    </h3>
  </div>
  <ConfirmFunding></ConfirmFunding>
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
