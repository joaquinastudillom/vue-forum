<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>

    <thread-editor @save="save" @cancel="cancel" />
  </div>
</template>

<script>
import ThreadEditor from "@/components/ThreadEditor";
export default {
  name: "PageThreadCreate",
  components: {
    ThreadEditor
  },
  props: {
    forumId: {
      type: String,
      required: true
    }
  },
  computed: {
    forum() {
      return this.$store.state.forums[this.forumId];
    }
  },
  methods: {
    save({ title, text }) {
      this.$store
        .dispatch("createThread", {
          text,
          title,
          forumId: this.forum[".key"]
        })
        .then(thread => {
          this.$router.push({
            name: "ThreadShow",
            params: { id: thread[".key"] }
          });
        });
    },
    cancel() {
      this.$router.push({ name: "Forum", params: { id: this.forum[".key"] } });
    }
  }
};
</script>

<style scoped></style>
