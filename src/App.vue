<template>
  <div>
    <div class="header">
      <nav>
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/app">Apps</router-link>
          </li>
          <li>
            <router-link to="/game">Game</router-link>
          </li>
          <li>
            <router-link to="/search">Search</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Apps from './components/Apps.vue';
import Game from './components/Game.vue';
import Search from './components/Search.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes : [
    { path: '/', components: Home },
    { path: '/home', components: Home },
    { path: '/app', components: Apps },
    { path: '/game', components: Game },
    { path: '/search', components: Search },
  ]
});

export default {
  name : 'app',
  router
}
</script>

<style>
.header {
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
}
ul {
  display: flex;
  list-style-type: none;
}
li {
  width: 25vw;
  height: 50px;
  text-align: center;
  color: #ffffff;
  transition: color 0.2s ease-in-out;
}
router-link {
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a{
  text-decoration:none;
  color:inherit;
}
*{
  box-sizing:border-box;
}
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:18px;
  background-color:rgba(0, 0, 0, 1);
  color:white;
  padding-bottom:70px;
}
</style>