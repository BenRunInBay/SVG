<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({
  mounted() {
    // The shadowRoot of the <object> element is null because SVG embeds it using a "closed" mode.
    let bikeObject: Element | null = document.querySelector("div object");
    if (bikeObject) console.log(bikeObject.shadowRoot);
  }
});
</script>

<template>
  <h1>Referencing SVG in web page</h1>
  <div class="two">
    <ul>
      <li>
        Embed as an image:
        <CodeBlock language="html">
          <img src="images/diagram.svg" />
        </CodeBlock>
        <br />(Indexed by search engines as an image)
        <ul>
          <li>Omit the width and height to scale the SVG to its parent container</li>
        </ul>
      </li>

      <li>
        Embed as an object:
        <CodeBlock language="html">
          <object type="image/svg+xml" data="images/diagram.svg"></object>
        </CodeBlock>
        <ul>
          <li class="demo">Uses Shadow DOM which does not inherit the CSS of the parent</li>
        </ul>
      </li>
    </ul>
    <div class="sample">
      <img src="images/examples/Vintage_bike-25.svg" alt="bicycle" />
      <object type="image/svg+xml" data="images/examples/Vintage_bike-25.svg" title="bicycle"></object>
    </div>
  </div>
</template>

<style>
/* CSS does NOT work on SVGs referenced with <img> or <object> elements: */
.sample object path {
  stroke: green;
}
</style>