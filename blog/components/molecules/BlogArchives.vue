<template>
  <ul class="list-unstyled categories">
    <li v-for="a in archives" :key="a.id">
      <a href="#">
        {{ a.archiveDate.year }} {{ a.archiveDate.month }}
        <span>({{ a.count }})</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    archives: {
      type: Array,
      default: () => []
    }
  }
}
</script>