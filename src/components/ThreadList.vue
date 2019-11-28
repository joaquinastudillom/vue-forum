<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <thread-list-item
      v-for="(thread, index) in threads"
      :key="index"
      :thread="thread"
    />
  </div>
</template>

<script>
import ThreadListItem from "@/components/ThreadListItem";
export default {
  name: "ThreadList",
  components: {
    ThreadListItem
  },

  props: {
    threads: {
      required: true,
      type: Array
    }
  }
};
</script>
