<script lang='ts'>
/**
 * CodeBlock
 * @date 2022-01-11
 */
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        lang: { type: String, default: "language-css" },
        includeClosing: { type: Boolean, default: false }
    },
    mounted() {
        if (this.$refs.codeBlock) {
            //@ts-ignore
            let rawCode = this.$refs.codeBlock.innerHTML,
                modifiedHtml = "";
            if (this.includeClosing) modifiedHtml = rawCode;
            else modifiedHtml = rawCode.replace(/\<\/\w+\>/ig, "");
            modifiedHtml = modifiedHtml.replace(/\</ig, "<br/>&lt;").replace(/\>/ig, "&gt;<br/>").replace(/_/ig, "");
            //@ts-ignore
            this.$refs.codeBlock.innerHTML = modifiedHtml;
        }
    }
});
</script>

<template>
    <code :class="lang" ref="codeBlock"><slot /></code>
</template>

<style scoped>
code {
    display: block;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8em;
    color: #ffe600;
    padding: 2px;
}
</style>