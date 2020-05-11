<template>
  <div>
    <BlogNavigation />
    <!-- END nav -->

    <div
      class="hero-wrap js-fullheight"
      style="background-image: url('images/bg_3.jpg');"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div
          class="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
          <div
            class="col-md-9 ftco-animate text-center"
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <h1
              class="mb-4"
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >Discover the wonder of the world</h1>
            <p
              data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
            >Find great places to stay, eat, shop, or visit from local experts</p>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-intro">
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-md-9">
            <h1>
              We're
              <strong>Traveler</strong> &amp;
              <strong>Blogger</strong> from Paris, Italy Who Loves Documenting Adventures &amp; Discoveries Around the World
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <!-- 글 목록 영역 -->
              <BlogPostList :postList="postList"></BlogPostList>
            </div>
            <!-- 페이징 영역 -->
            <BlogPaging ></BlogPaging>
          </div>
          <!-- END-->

          <!-- 우측 사이드바 영역 -->
          <BlogRightSide :blogData="blogData"></BlogRightSide>

          <!-- END COL -->
        </div>
      </div>
    </section>

    <BlogFooter :blogData="blogData"></BlogFooter>
  </div>
</template>

<script>
import BlogNavigation from "~/components/organisms/BlogNavigation.vue";
import BlogRightSide from "~/components/organisms/BlogRightSide.vue";
import BlogFooter from "~/components/organisms/BlogFooter.vue";
import BlogPostList from "~/components/organisms/BlogPostList.vue";
import BlogPaging from "~/components/molecules/BlogPaging.vue";

export default {
  components: {
    BlogNavigation,
    BlogRightSide,
    BlogFooter,
    BlogPostList,
    BlogPaging
  },

  //컴포넌트가 렌더링 되기 전에 상태에 데이터를 채우기 위해 사용
  async fetch(context) {
	  if(context.store.state.post.postList.length == 0) {
		  context.store.dispatch("post/initData")
    }
    
    return context.store.dispatch("post/fetchList")
  },

  computed: {
	  postList() {
		  return this.$store.state.post.postList
	  },

	  blogData() {
		  let data = {}
		  let archives = this.$store.state.post.archives
		  let tagCloud = this.$store.state.post.tagCloud
		  let categoryInfos = this.$store.state.post.categoryInfos

		  data.archives = archives
		  data.tagCloud = tagCloud
		  data.categoryInfos = categoryInfos

		  return data

	  }
  }
};
</script>

<style>
</style>
