<template>
<div>
  <Products v-bind:appData="topFreeGames">
  </Products>
  <Products v-bind:appData="topPaidGames">
  </Products>
</div>
</template>
<script>
import Products from "./Products";

export default {
  name : "application",
  components: { Products },
  created: function() {
    this.$axios.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json")
      .then((response) => {
        this.topFreeGames = response.data.feed;
        // console.log(this.topFreeApps);
      });
    this.$axios.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json")
      .then((response) => {
        this.topPaidGames = response.data.feed;
        // console.log(this.topPaidApps);
      });
  },
  data() {
    return {
      topFreeGames: null,
      topPaidGames: null
    }
  }
}
</script>
