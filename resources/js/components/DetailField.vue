<template>
  <PanelItem :index="index" :field="field">
    <template #value>
      <span class="heroicon-index" v-html="field.value" />
    </template>
  </PanelItem>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
<style>
.heroicon-index > svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>