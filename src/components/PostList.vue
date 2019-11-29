<template>
  <div class="post-list">
    <post-list-item v-for="post in posts" :key="post['.key']" :post="post" />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";
export default {
  name: "PostList",
  components: {
    PostListItem
  },
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
};
</script>

<style></style>
