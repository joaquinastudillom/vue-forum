<template>
  <div class="col-large push-top">
    <h2>
      {{ thread.title }}

      <router-link
        :to="{ name: 'ThreadEdit', id: id }"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h2>
    <post-list :posts="postsList" />
    <post-editor :thread-id="id" />
  </div>
</template>

<script>
import sourceData from "@/data";
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";
export default {
  name: "ThreadShow",
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    thread() {
      return this.$store.state.threads[this.id];
    },
    postsList() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts).filter(post =>
        postIds.includes(post[".key"])
      );
    }
  }
};
</script>

<style scoped></style>
