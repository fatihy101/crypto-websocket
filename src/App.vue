<template>
  <div id="app">
    <CardList />

      <SocialButton id="github"
        url="https://github.com/fatihy101/crypto-websocket" 
        icon="https://img.icons8.com/material-outlined/36/000000/github.png"
        tooltip="Go to source code"
      />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import SocialButton from '@/components/SocialButton.vue'

export default {
  name: 'App',
  components: {
    CardList,
    SocialButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.shadowed {
  box-shadow: 0 5px 4px #BAEAFF, 0 6px 6px rgba(0,0,0,0.20);
  &:hover {
    box-shadow: 0 0px 0px rgba(0,0,0,0.19), 0 3px 2px rgba(0,0,0,0.23);
  }

  #github {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}

</style>
