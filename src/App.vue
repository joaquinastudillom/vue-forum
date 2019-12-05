<template>
  <div id="app">
    <the-navbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "App",
  components: {
    TheNavbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@import "assets/css/style.css";
</style>
