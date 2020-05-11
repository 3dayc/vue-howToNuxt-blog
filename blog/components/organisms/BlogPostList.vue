<template>
  <div>
    <div v-for="post in postList" :key="post.id">
      <BlogPostCard v-bind="post"></BlogPostCard>
    </div>
  </div>
</template>

<script>
import BlogPostCard from "~/components/molecules/BlogPostCard.vue"

export default {
    components: {
        BlogPostCard
    },

    props: {
      postList: {
        type: Array,
        default: () => []
      }
    }
}
</script>