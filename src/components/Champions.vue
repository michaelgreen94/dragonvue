<template>
  <div class="champions">
    <div class="loading" v-if="champions.length == 0">Loading Champs</div>
    <div class="champion" v-else v-for="champion in champion" :key="champion.id" @click="setChampion(champion)"></div>
    {{champion.name}}
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch("getChampions")
    },
    computed: {
      champions() {
        return this.$store.state.champions;
      }
    },
    methods: {
      setChampion() {
        this.$store.dispatch('setChampion', champion)
      }
    }
  }
</script>

<style>
</style>