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
      const post = {
        text: this.text,
        threadId: this.threadId
      };
      this.text = "";
      //keeps this event here in case the parent component needs to do something on save like hide the editor
      this.$emit("save", { post });
      this.$store.dispatch("createPost", post);
    }
  }
};
</script>
