<template>
  <div class="game">
    <h1>Hello From Game</h1>
    <div class="game-config">
      <div class="selected-champion">{{champion.name}}</div>
      <div v-if="champion.name && dragon.name">
        <button @click="startGame">Fight</button>
      </div>
      <div class="selected-dragon">{{dragon.name}}</div>
    </div>
    <div class="select-game-details">
      <champions/>
      <dragons/>
    </div>
  </div>
</template>

<script>
  import Champions from '@/components/Champions';
  import Dragons from '@/components/Dragons'
  export default {
    name: "Game",
    components: {
      Champions,
      Dragons
    },
    computed: {
      champion() {
        return this.$store.state.champion
      },
      dragon() {
        return this.$store.state.dragon
      }
    },
    methods: {
      startGame() {
        let gameConfig = {
          champion: this.champion,
          dragon: this.dragon
        }
        this.$store.dispatch('startGame', gameConfig)
      }
    }
  }
</script>

<style>
  .select-game-details {
    display: flex;
    justify-content: space-between;
    margin: 3rem
  }

  .game-config {
    display: flex;
    justify-content: space-between;
    margin: 3rem
  }
</style>