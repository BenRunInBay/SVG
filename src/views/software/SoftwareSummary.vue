<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Recommends for graphics software for working with SVGs</h1>
  <ul>
    <li>Decide if you are using text outlining or referencing fonts.</li>
    <li>You may need to optimize SVG, e.g. using <a href="https://jakearchibald.github.io/svgomg/" target="_blank">SVGOMG</a></li>
    <li>Drag exported SVG into browser and inspect elements to learn what is what.</li>
    <li>Expect to do some manual clean-up and preparing the SVG for reactive coding, animation, etc.</li>
    <li>Label elements with ID values so that you can find them in code.</li>
    <li>Share design files with designer and agree to how they are set up. Doing so will make it more efficient on developer when  designer makes changes</li>
  </ul>
</template>
