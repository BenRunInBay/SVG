<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Swapping graphics created in Figma (technique 1)</h1>
  <div class="web-example">
    <object
      class="full-version"
      type="image/svg+xml"
      data="images/examples/readiness-full.svg"
      title="Readiness example full size"
    />
    <object
      class="small-version"
      type="image/svg+xml"
      data="images/examples/readiness-small.svg"
      title="Readiness example small size"
    />
  </div>
</template>

<style scoped>
.full-version {
  display: block;
}
.small-version {
  display: none;
}
@media screen and (max-width: 600px) {
  .full-version {
    display: none;
  }
  .small-version {
    display: block;
  }
}
</style>