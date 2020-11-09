<template>
  <div>
    <Loader v-if="loading" />
    <div v-if="!loading">
      <toggle-button v-model="checked" />
      <Products v-if="!checked" v-bind:appData="topFreeGames" />
      <Products v-if="checked" v-bind:appData="topPaidGames" />
    </div>
  </div>
</template>
<script>
import Loader from "./Loader";
import Products from "./Products";

export default {
  name: "game",
  components: { Loader, Products },
  async created() {
    try {
      const response1 = await this.$axios.get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/games/25/explicit.json"
      );
      const response2 = await this.$axios.get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/games/25/explicit.json"
      );

      this.topFreeGames = response1.data.feed;
      this.topPaidGames = response2.data.feed;
    } catch (e) {
      this.error = "Can't find game information.";
    } finally {
      this.loading = false;
    }
  },
  data() {
    return {
      topFreeGames: null,
      topPaidGames: null,
      checked: false,
      error: "",
      loading: true,
    };
  },
};
</script>
