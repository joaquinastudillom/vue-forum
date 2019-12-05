<template>
  <div class="col-full push-top">
    <h1>Welcome to the forum</h1>
    <category-list :categories="categories" />
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";
export default {
  name: "HelloWorld",
  components: {
    CategoryList
  },
  data() {
    return {};
  },
  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    }
  }
};
</script>
