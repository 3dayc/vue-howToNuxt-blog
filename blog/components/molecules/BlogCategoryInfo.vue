<template>
  <ul class="list-unstyled categories">
    <li v-for="c in categoryInfos" :key="c.id">
      <a href="#">
        {{ c.name }}
        <span>({{ c.count}})</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categoryInfos: {
      type: Array,
      default: () => []
    }
  }
}
</script>