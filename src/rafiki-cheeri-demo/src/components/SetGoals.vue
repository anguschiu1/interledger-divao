<script>
export default {
  data() {
    return {
      valueA: 40,
      valueB: 20,
      valueC: 60,
      message: null
    }
  },
  methods: {
    Send() {
      this.message = 'Impact goals is set.'
    }
  },
  components: {}
}
</script>
<template>
  <div class="greetings">
    <h1 class="green">Setup Impact Goals</h1>
    <h3>
      SDG goal:Quality Education ( {{ valueA || '' }} )<input
        type="range"
        min="0"
        max="100"
        step="1"
        v-model="valueA"
      />
      SDG goal: Reduced Inequalities ( {{ valueB || '' }} )<input
        type="range"
        min="0"
        max="100"
        step="1"
        v-model="valueB"
      />
      SDG goal: Climate Action ( {{ valueC || '' }} )<input
        type="range"
        min="0"
        max="100"
        step="1"
        v-model="valueC"
      />
      <button @click="Send()">Set</button>
    </h3>
    <h3>{{ this.message }}</h3>
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
