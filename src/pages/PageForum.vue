<template>
  <div>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">
            {{ forum.description }}
          </p>
        </div>
        <router-link
          class="btn-green btn-small"
          :to="{ name: 'ThreadCreate', params: { forumId: forum['.key'] } }"
        >
          Start a thread
        </router-link>
      </div>
    </div>

    <div class="col-full push-top">
      <thread-list :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadList from "@/components/ThreadList";
import sourceData from "@/data";
export default {
  name: "PageForum",
  components: {
    ThreadList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum() {
      return sourceData.forums[this.id];
    },
    threads() {
      return Object.values(sourceData.threads).filter(
        thread => thread.forumId === this.id
      );
    }
  }
};
</script>
