<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/monstergame">Monster Game</router-link> |
      <router-link to="/servers">Servers</router-link>  |
      <router-link to="/slots">Slots</router-link>  |
      <router-link to="/dynamicComp">dynamicComp</router-link>  |
      <router-link to="/quotes">Qoutes</router-link>  |
      <router-link to="/forms">Forms</router-link>  |
      <router-link to="/customdirectives">Custom Directives</router-link>  |
      <router-link to="/filterandmixin">Filter And Mixin</router-link>  |
      <router-link to="/saveuserinfo">Vue Resources Save User Info</router-link>  |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
