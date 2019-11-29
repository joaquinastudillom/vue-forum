<template>
  <div class="col-large push-top">
    <h2>{{ thread.title }}</h2>
    <post-list :posts="postsList" />
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea
          id=""
          v-model="newPostText"
          class="form-input"
          name=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
import sourceData from "@/data";
import PostList from "@/components/PostList";
export default {
  name: "ThreadShow",
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      thread: sourceData.threads[this.id],
      newPostText: ""
    };
  },
  computed: {
    postsList() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts).filter(post =>
        postIds.includes(post[".key"])
      );
    }
  },
  methods: {
    addPost() {
      const postId = "greatPost" + Math.random();
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
        ".key": postId
      };
      this.$set(sourceData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.newPostText = "";
    }
  }
};
</script>

<style scoped></style>
