<template>
  <div class="champions">
    <div class="loading" v-if="champions.length == 0">Loading Champs</div>
    <div class="champion" v-else v-for="champion in champions" :key="champion.id" @click="setChampion(champion)">
      {{champion.name}}
    </div>
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
      setChampion(champion) {
        this.$store.dispatch('setChampion', champion)
      }
    }
  }
</script>

<style>
</style>