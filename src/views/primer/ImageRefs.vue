<script lang="ts">
import { defineComponent, PropType } from "vue";
import CodeBlock from "../../components/CodeBlock.vue";

interface IComponentData { }
export default defineComponent({ components: { CodeBlock } });
</script>

<template>
  <h1>Image references</h1>
  <div class="two">
    <ul>
    <li>Use this:
      <CodeBlock language="svg">
        <image href="images/person.jpg"/>
      </CodeBlock>
      <br/><em>not</em> &lt;img src=""&gt;</li>
    <li>This format is deprecated:
      <CodeBlock language="html">
        <image xlink:href=""/>
      </CodeBlock>
    </li>
    <li class="demo">The SVG viewBox affects the amount of image shown
      <ul>
        <li>This photo is 1024x683</li>
        <li>viewBox="0 0 512 683"</li>
      </ul>
    </li>
    <li>Position the image with  x and y:
      <CodeBlock language="svg">
      <image href="images/person.jpg" x="5" y="10"/>
      </CodeBlock>
      </li>
  </ul>
  <svg viewBox="0 0 512 683" class="outline">
    <image x="0" y="0" href="images/photos/optimized/cute-dog-behind-the-kitchen-table-2021-08-27-09-55-58-utc.jpg"/>
  </svg>
  </div>
</template>
