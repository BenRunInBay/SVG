<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Dimensions</h1>
  <div class="two">
    <ul>
      <li>SVG main element:
        <CodeBlock language="html">
          <svg viewBox="0 0 100 100"></svg>
        </CodeBlock>
        </li>
      <li>User units within the coordinate system</li>
      <li>Pixel units (px) are the same as the user coordinate system</li>
      <li>Units such as points or percentages are converted into the user coordinate system</li>
      <li>This makes sense for the circle displayed in the center</li>
      <li class="demo">But the scale in which the SVG is displayed affects the stroke width of the green rectangle
        <ul>
          <li>vector-effect: non-scaling-stroke;</li>
        </ul>
      </li>
    </ul>
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="outline"
      style="width:100%; height:auto"
    >
      <g id="dimension-layout-frame">
        <circle cx="50" cy="50" r="25" fill="blue"/>
        <rect x="0" y="0" width="80" height="80" stroke-width="1" stroke="green"  />
      </g>
    </svg>
  </div>
</template>

<style>
#dimension-layout-frame rect {
  /* vector-effect: non-scaling-stroke; */
}
</style>