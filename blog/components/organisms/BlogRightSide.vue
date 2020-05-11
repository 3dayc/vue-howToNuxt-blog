<template>
  <div class="col-lg-4 sidebar ftco-animate">
    <div class="sidebar-box">
      <form action="#" class="search-form">
        <div class="form-group">
          <span class="icon icon-search"></span>
          <input type="text" class="form-control" placeholder="Type a keyword and hit enter" />
        </div>
      </form>
    </div>
    <div class="sidebar-box ftco-animate">
      <h3>Categories</h3>
      <BlogCategoryInfo />
    </div>

    <div class="sidebar-box ftco-animate">
      <h3>Tag Cloud</h3>
      <ul class="tagcloud">
        <a href="#" class="tag-cloud-link">dish</a>
        <a href="#" class="tag-cloud-link">menu</a>
        <a href="#" class="tag-cloud-link">food</a>
        <a href="#" class="tag-cloud-link">sweet</a>
        <a href="#" class="tag-cloud-link">tasty</a>
        <a href="#" class="tag-cloud-link">delicious</a>
        <a href="#" class="tag-cloud-link">desserts</a>
        <a href="#" class="tag-cloud-link">drinks</a>
      </ul>
    </div>

    <div class="sidebar-box ftco-animate">
      <h3>Archives</h3>
      <BlogArchives />
    </div>
  </div>
</template>

<script>
import BlogCategoryInfo from "~/components/molecules/BlogCategoryInfo.vue";
import BlogArchives from "~/components/molecules/BlogArchives.vue";

export default {
  components: {
    BlogCategoryInfo,
    BlogArchives
  }
};
</script>