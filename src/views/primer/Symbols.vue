<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({ components: {} });
</script>

<template>
  <h1>Defs and Symbols</h1>
  <div class="two">
    <ul>
      <li>Use &lt;defs&gt; around an object to hide it from rendering initially, but then &lt;use&gt; later</li>
      <li>
        Preferably, wrap an object as a &lt;symbol&gt;
        <CodeBlock language="html" include-closing>
          <symbol id="disc" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
            <rect x="9" y="0" width="8" height="4" />
          </symbol>
        </CodeBlock>
        <CodeBlock language="html">
          <use href="#disc" x="20" y="20" fill="red" />
          <use href="#disc" x="50" y="50" fill="green" />
          <use href="#disc" x="75" y="75" fill="blue"></use>
        </CodeBlock>
      </li>
      <li>Symbols will apply certain attributes to their contents with each distinct usage</li>
    </ul>
    <svg viewBox="0 0 100 100" class="outline">
      <symbol id="disc" width="10" height="10" viewBox="0 0 10 10">
        <circle cx="5" cy="5" r="5" />
        <rect x="9" y="0" width="8" height="4" />
      </symbol>
      <use href="#disc" x="20" y="20" fill="red" />
      <use href="#disc" x="50" y="50" fill="green" />
      <use href="#disc" x="75" y="75" fill="blue" />
    </svg>
  </div>
</template>
