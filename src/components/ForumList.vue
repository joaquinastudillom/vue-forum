<template>
  <div>
    <forum-list-item
      v-for="forum in forums"
      :key="forum['.key']"
      :forum="forum"
    />
  </div>
</template>

<script>
import ForumListItem from "@/components/ForumListItem";
export default {
  name: "ForumList",
  components: {
    ForumListItem
  },
  props: {
    forums: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped></style>
