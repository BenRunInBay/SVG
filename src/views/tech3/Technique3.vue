<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Technique 3: Programatically adjusting the layout</h1>
  <ul>
    <li>Inline SVG</li>
    <li>Checking the window size using either window.onresize or the ResizeObserver API</li>
    <li>Adjusting the viewBox</li>
    <li>Translating between SVG user coordinates and the DOM viewport coordinates</li>
  </ul>
</template>
