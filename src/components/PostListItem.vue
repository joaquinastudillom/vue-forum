<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>

      <p class="desktop-only text-small">{{ userPostCount }} posts</p>
    </div>

    <div class="post-content">
      <div>
        <p>
          {{ post.text }}
        </p>
      </div>
    </div>

    <div class="post-date text-faded">
      <app-date :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from "@/utils";
export default {
  name: "PostListItem",
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user() {
      return this.$store.state.users[this.post.userId];
    },
    userPostCount() {
      return countObjectProperties(this.user.posts);
    }
  }
};
</script>

<style></style>
