<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
    <h1>Technique 2 media query using <b>img</b> or <b>object</b> element</h1>
    <div class="two">
        <ul>
            <li>Embed the SVG using object:
                <CodeBlock language="html">
                    <object type="image/svg+xml" data="images/vintage-clock.svg"/>
                </CodeBlock>
            </li>
            <li>CSS media queries must be placed in the SVG</li>
            <li class="demo">The media query is based on the <b>SVG</b> not the containing page</li>
        </ul>
        <!-- <img src="images/examples/vintage-clock.svg"/> -->
        <object data="images/examples/vintage-clock.svg" type="image/svg+xml" class="outline"/>
    </div>
</template>

<style scoped>
</style>