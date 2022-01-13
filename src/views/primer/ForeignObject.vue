<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({
  data() {
    return {
      heading: "Products and services"
    }
  }
});
</script>

<template>
  <h1>foreignObject</h1>
  <div class="two">
    <ul>
      <li>Embed HTML inside of the SVG layout</li>
      <li>Useful for text-wrapping</li>
      <li>Insert HTML inside:
        <CodeBlock language="html" include-closing>
          <foreignObject x="0" y="0" width="80" height="80">
            <span>Products and services</span>
          </foreignObject>
        </CodeBlock>
      </li>
    </ul>
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="outline"
      style="width:100%; height:auto"
    >
      <g id="layout-frame">
        <rect x="0" y="0" width="80" height="80" stroke-width="1" stroke="green" />
        <foreignObject class="foreign-heading-example" x="0" y="0" width="80" height="80">
          <span>{{ heading }}</span>
        </foreignObject>
      </g>
    </svg>
  </div>
</template>

<style>
.foreign-heading-example span {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  color: white; /* use this */
  fill: blue; /* not this */
}
</style>