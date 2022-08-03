<template>
  <span class="heroicon-list" v-html="field.value"></span>
</template>

<script>
export default {
  props: ['resourceName', 'field'],

  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>
<style>
.heroicon-list svg {
  width: 24px;
  height: 24px;
}
</style>
