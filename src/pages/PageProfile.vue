<template>
  <div class="flex-grid">
    <user-profile-card
      v-if="!edit"
      :user="user"
      :user-threads-count="userThreadsCount"
      :user-posts-count="userPostsCount"
    />

    <user-profile-card-editor
      v-else
      :user="user"
      :user-threads-count="userThreadsCount"
      :user-posts-count="userPostsCount"
    />

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead"> {{ user.username }}'s recent activity </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />

      <post-list :posts="userPosts" />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapGetters } from "vuex";
import { countObjectProperties } from "@/utils";
import UserProfileCard from "@/components/UserProfileCard";
import UserProfileCardEditor from "@/components/UserProfileCardEditor";

export default {
  name: "PageProfile",
  components: { PostList, UserProfileCard, UserProfileCardEditor },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      user: "authUser"
    }),

    userThreadsCount() {
      return countObjectProperties(this.user.threads);
    },

    userPostsCount() {
      return countObjectProperties(this.user.posts);
    },

    userPosts() {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts).filter(
          post => post.userId === this.user[".key"]
        );
      }
      return [];
    }
  }
};
</script>

<style scoped></style>
