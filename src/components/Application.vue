<template>
<div>
  <Products v-bind:appData="topFreeApps">
  </Products>
  <Products v-bind:appData="topPaidApps">
  </Products>
</div>
</template>
<script>
import Products from "./Products";

export default {
  name : "application",
  components: { Products },
  created: function() {
    this.$axios.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json")
      .then((response) => {
        this.topFreeApps = response.data.feed;
        // console.log(this.topFreeApps);
      });
    this.$axios.get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/25/explicit.json")
      .then((response) => {
        this.topPaidApps = response.data.feed;
        // console.log(this.topPaidApps);
      });
  },
  data() {
    return {
      topFreeApps: null,
      topPaidApps: null
    }
  }
}
</script>
