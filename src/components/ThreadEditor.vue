<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="form.title"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        id="thread_content"
        v-model="form.text"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost" @click="cancel">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">
        {{ isUpdate ? "Update" : "Publish" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ThreadEditor",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      form: {
        title: this.title,
        text: this.text
      }
    };
  },
  computed: {
    isUpdate() {
      return !!this.title;
    }
  },
  methods: {
    save() {
      this.$emit("save", { title: this.form.title, text: this.form.text });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped></style>
