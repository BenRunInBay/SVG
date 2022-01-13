<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({ components: {  } });
</script>

<template>
  <h1>
    Technique 2: Using media queries
    <em>within</em> the SVG
  </h1>
  <p>
        Media queries can be used inside the
        <b>defs</b>:
        <CodeBlock language="css" include-closing>
            <defs>
            <style_>
              @media screen and ... {
              }
            </style_>
          </defs>
        </CodeBlock>
  </p>
</template>
