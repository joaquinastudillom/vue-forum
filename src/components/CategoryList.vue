<template>
  <div>
    <category-list-item
      v-for="category in categories"
      :key="category['.key']"
      :category="category"
    />
  </div>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem";
export default {
  name: "CategoryList",
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped></style>
