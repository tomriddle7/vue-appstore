<template>
  <div>
    <Products v-bind:appData="upcomingApps"> </Products>
    <Products v-bind:appData="upcomingGames"> </Products>
  </div>
</template>
<script>
import Products from "./Products";

export default {
  name: "home",
  components: { Products },
  created: function () {
    this.$axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/new-apps-we-love/all/10/explicit.json"
      )
      .then((response) => {
        this.upcomingApps = response.data.feed;
        // console.log(this.topFreeApps);
      });
    this.$axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/new-games-we-love/all/10/explicit.json"
      )
      .then((response) => {
        this.upcomingGames = response.data.feed;
        // console.log(this.topPaidApps);
      });
  },
  data() {
    return {
      upcomingApps: null,
      upcomingGames: null,
    };
  },
};
</script>
