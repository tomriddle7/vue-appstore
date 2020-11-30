<template>
  <div>
    <Loader v-if="loading" />
    <div v-if="!loading">
      <ToggleButton
        :defaultState="true"
        v-on:change="eventHandler"
      />
      <Products v-if="!checked" v-bind:appData="topFreeApps" />
      <Products v-if="checked" v-bind:appData="topPaidApps" />
    </div>
  </div>
</template>
<script>
import Loader from "./Loader";
import Products from "./Products";
import ToggleButton from "./ToggleButton";

export default {
  name: "application",
  components: { Loader, Products, ToggleButton },
  async created() {
    try {
      const response1 = await this.$axios.get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-free/all/25/explicit.json"
      );
      const response2 = await this.$axios.get(
        "https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/kr/ios-apps/top-paid/all/25/explicit.json"
      );

      this.topFreeApps = response1.data.feed;
      this.topPaidApps = response2.data.feed;
    } catch (e) {
      this.error = "Can't find app information.";
    } finally {
      this.loading = false;
    }
  },
  data() {
    return {
      topFreeApps: null,
      topPaidApps: null,
      checked: false,
      error: "",
      loading: true,
    };
  },
  methods: {
    eventHandler(value) {
      this.checked = !value;
    }
  },
};
</script>
