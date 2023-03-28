<script>
export default {
  data() {
    return {
      value: 0,
      message: null
    }
  },
  methods: {
    Send() {
      this.message = 'Goal set'
    }
  },
  components: {}
}
</script>
<template>
  <div class="greetings">
    <h1 class="green">Setup Impact Goals</h1>
    <h3>
      <input type="range" min="0" max="100" step="1" v-model="value" />
      <input type="number" v-model="value" />
      <button @click="Send()">Set</button>
    </h3>
    <h1>{{ this.message }}</h1>
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
