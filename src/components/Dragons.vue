<template>
  <div class="dragons">
    <div class="loading" v-if="dragons.length == 0">Loading Dragons</div>
    <div class="dragon" v-else v-for="dragon in dragons" :key="dragon.id" @click="setDragon(dragon)"></div>
    {{dragon.name}}
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("getDragons")
    },
    computed: {
      dragons() {
        return this.$store.state.champions;
      }
    },
    methods: {
      setDragon(dragon) {
        this.$store.dispatch("setDragon", dragon)
      }
    }
  }
</script>

<style>
</style>