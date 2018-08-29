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
        this.$store.dispatch('startGame', {
          champion: this.champion,
          dragon: this.dragon
        })
      }
    }
  }
</script>

<style>
  .select-game-details {
    display: flex;
    justify-content: space-between
  }
</style>