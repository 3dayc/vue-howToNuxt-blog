<template>
  <div class="col-md-12">
    <div class="blog-entry ftco-animate">
      <a href="#" class="img" style="background-image: url(images/image_1.jpg);"></a>
      <div class="text pt-2 mt-5">
        <span class="big">{{ category.name }}</span>
        <h3 class="mb-4">
          <a href="#">{{ title }}</a>
        </h3>
        <p class="mb-4">
          {{ content }}
        </p>
        <div class="author mb-4 d-flex align-items-center">
          <a href="#" class="img" style="background-image: url(images/person_1.jpg);"></a>
          <div class="ml-3 info">
            <span>Written by</span>
            <h3>
              <a href="#">Dave Lewis</a>,
              <span>{{ createAtStr }}</span>
            </h3>
          </div>
        </div>
        <div class="meta-wrap d-md-flex align-items-center">
          <div class="half order-md-last text-md-right">
            <p class="meta">
              <span>
                <i class="icon-heart"></i>3
              </span>
              <span>
                <i class="icon-eye"></i>100
              </span>
              <span>
                <i class="icon-comment"></i>5
              </span>
            </p>
          </div>
          <div class="half">
            <p>
              <a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '~/components/formatDate'

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    category: {
      type: Object,
      required: true,
      default: () => {}
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createAt: {
      type: Number,
      required: true
    }
  },

  computed: {
    createAtStr() {
      return formatDate(this.createAt)
    }
  }
}
</script>