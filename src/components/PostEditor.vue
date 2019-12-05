<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        id=""
        v-model="text"
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
</template>

<script>
export default {
  name: "TextEditor",
  props: {
    threadId: {
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    save() {
      const postId = "greatPost" + Math.random();
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
        ".key": postId
      };
      this.$store.dispatch("createPost", post);
      this.text = "";
    }
  }
};
</script>
