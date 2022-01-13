<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ResizeSVGViewBox } from "../../lib/ui/ResizeSVGViewBox";


interface IComponentData { 
    svgResizer: ResizeSVGViewBox;
}
export default defineComponent({
    data() {
        return {
            svgResizer: new ResizeSVGViewBox()
        } as IComponentData
    },
    mounted() {
        if (this.$refs.graphic) {
            let svgElement: SVGElement = this.$refs.graphic as SVGElement;
            this.svgResizer.observeSizeUsingEventModel(svgElement);
        }
    },
    beforeUnmount() {
        if (this.svgResizer) this.svgResizer.stopObserving();
    }
});
</script>

<template>
    <h1>Solution: Resize viewBox dynamically</h1>
    <div class="two">
        <ul>
            <li>Set initial viewBox to maximum "reasonable" dimension<br/>(e.g. viewBox="0 0 1000 1500")</li>
            <li>Observe size changes to SVG element using window.resize event or ResizeObserver API</li>
            <li class="demo">Adjust viewBox to the actual pixel size of the SVG element</li>
        </ul>
        <svg ref="graphic" viewBox="0 0 1000 1500" class="outline">
            <rect x="0" y="500" width="300" height="400" fill="#b9e">
            </rect>
            <circle cx="500" cy="500" r="300" fill="#a24">
            </circle>
            <text x="20" y="100" font-family="Arial" font-size="40" fill="#fff">SVG Text (might get cut off)</text>
        </svg>
    </div>
</template>
