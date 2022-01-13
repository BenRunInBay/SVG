<script lang='ts'>
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    props: {
        index: Number
    }
});
</script>

<template>
    <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <text
            transform="translate(247 295.271) rotate(-19.9999)"
            fill="white"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Rokkitt"
            font-size="72"
            letter-spacing="0em"
        >
            <tspan x="0" y="58.892">Polling question</tspan>
        </text>
    </svg>

    <!-- <div
        style="position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden;"
    >
        <iframe
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allowfullscreen="true"
            allowtransparency="true"
            frameborder="0"
            height="315"
            src="https://www.mentimeter.com/embed/c013b67f8ba1a176ac0eec3f5007bde1/47cb39849193"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            width="420"
        ></iframe>
    </div>-->
</template>

<style scoped>
h2 {
}
</style>