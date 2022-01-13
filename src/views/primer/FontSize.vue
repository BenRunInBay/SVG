<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({
  data() {
    return {
    }
  }
});
</script>

<template>
  <h1>Font sizes in relation to SVG object</h1>
  <div class="two">
    <ul>
      <li>
        Text display:
        <CodeBlock language="html" include-closing>
          <text x="0" y="100">Wge</text>
        </CodeBlock>
      </li>
      <li>The text is positioned at bottom left</li>
      <li>Font size represents the width of the character W</li>
      <li class="demo">CSS rules can affect SVG elements</li>
    </ul>
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="outline"
    >
      <g id="layout-frame">
        <text id="heading-block" class="font-size-heading-example">
          <tspan x="0" y="100" style="font-size:100px; fill:white">Wge</tspan>
          <tspan x="0" y="100" style="font-size:50; fill:yellow">Wge</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<style>
.font-size-heading-example {
  font-family: Georgia;
  /* font-family: Arial; */
  /* stroke: green; */
}
</style>