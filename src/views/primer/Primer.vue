<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({ components: {  } });
</script>

<template>
  <h1>SVG Primer</h1>
  <div class="two">
    <ul>
      <li>Markup language (like HTML)</li>
      <li>
        Vector elements:
        <CodeBlock language="html">
          <rect x="0" y="0" width="10" height="5" />
          <circle cx="10" cy="10" r="5"></circle>
          <line x1="0" y1="0" x2="10" y2="10"></line>
          <path d="M0 10"></path>
        </CodeBlock>
      </li>
      <li>The &lt;g&gt; element for grouping</li>
      <li>
        Define things without rendering them using
        <CodeBlock language="html">
          <defs></defs>
          <symbol></symbol> + <use></use>
        </CodeBlock>
      </li>
    </ul>
    <ul>
      <li>
        Presentation attributes with some cross-over with and support by CSS
        <CodeBlock language="css">
          <text fill="blue" font-size="12"/>
        </CodeBlock>
      </li>
      <li>
        Some elements and attributes use camelCase
        <CodeBlock language="svg">
          <svg viewBox="0 0 100 100">
            <foreignObject></foreignObject>
          </svg>
        </CodeBlock>
      </li>
    </ul>
  </div>
</template>
