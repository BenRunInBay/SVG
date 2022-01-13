<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ResizeSVGViewBox } from "../../lib/ui/ResizeSVGViewBox";
import { SVGCoordinates } from "../../lib/ui/SVGCoordinates";

const CIRCLE_RADIUS = "20", CIRCLE_COLOR = "#FFE600";

interface IComponentData { }
export default defineComponent({
    components: {
    },
    data() {
        return {
            domWidth: 0,
            domHeight: 0,
            circleX: 0,
            circleY: 0,
            svgResizer: new ResizeSVGViewBox()
        };
    },
    mounted() {
        if (this.$refs.graphic) {
            // get reference to the SVG container element
            let svgMainElement: SVGElement = this.$refs.graphic as SVGElement;
            // watch for window resizing to then adjust the SVG layout
            // this.svgResizer.observeSizeUsingEventModel(svgMainElement, this.updateDimensions);
        }
    },
    methods: {
        updateDimensions(svgMainElement: SVGElement, viewBoxWidth: number, viewBoxHeight: number) {
            this.domWidth = viewBoxWidth;
            this.domHeight = viewBoxHeight;
        },
        dropPin(evt: MouseEvent) {
            if (evt) {
                let svgMainElement: SVGGraphicsElement = evt.target as SVGGraphicsElement,
                    domPoint: DOMPoint | null = svgMainElement ? new DOMPoint(evt.clientX, evt.clientY) : null,
                    svgPoint: DOMPoint | null = svgMainElement && domPoint ? SVGCoordinates.toSVG(domPoint.x, domPoint.y, svgMainElement) : null,
                    circle: SVGElement | null = svgMainElement ? svgMainElement.querySelector("circle") : null;
                if (circle) {
                    circle.remove();
                }
                circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGElement;
                if (circle && svgPoint) {
                    circle.setAttribute("cx", svgPoint.x.toString());
                    circle.setAttribute("cy", svgPoint.y.toString());
                    circle.setAttribute("r", CIRCLE_RADIUS);
                    circle.setAttribute("fill", CIRCLE_COLOR);
                    svgMainElement.appendChild(circle);
                    this.circleX = Math.round(svgPoint.x);
                    this.circleY = Math.round(svgPoint.y);
                }
            }
        }
    }
});
</script>

<template>
    <h1>SVG coordinates demo</h1>
    <div>
        <div class="info">
            <span>SVG User dimensions: 500 x 200</span>
            <!-- <span>Viewport dimensions: {{ domWidth }} x {{ domHeight }}</span> -->
            <span>Circle location (svg user coord): {{ circleX }}, {{ circleY }}</span>
        </div>
        <svg
            ref="graphic"
            viewBox="0 0 500 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="outline"
            @click="dropPin"
        >
            <g id="ruler" stroke="#aaa">
                <line x1="0" y1="0" x2="0" y2="30" stroke-width="1" />
                <line x1="25" y1="0" x2="25" y2="20" stroke-width="1" />
                <line x1="50" y1="0" x2="50" y2="20" stroke-width="1" />
                <line x1="75" y1="0" x2="75" y2="20" stroke-width="1" />
                <line x1="100" y1="0" x2="100" y2="30" stroke-width="1" />
                <line x1="125" y1="0" x2="125" y2="20" stroke-width="1" />
                <line x1="150" y1="0" x2="150" y2="20" stroke-width="1" />
                <line x1="175" y1="0" x2="175" y2="20" stroke-width="1" />
                <line x1="200" y1="0" x2="200" y2="30" stroke-width="1" />
                <line x1="225" y1="0" x2="225" y2="20" stroke-width="1" />
                <line x1="250" y1="0" x2="250" y2="20" stroke-width="1" />
                <line x1="275" y1="0" x2="275" y2="20" stroke-width="1" />
                <line x1="300" y1="0" x2="300" y2="30" stroke-width="1" />
                <line x1="325" y1="0" x2="325" y2="20" stroke-width="1" />
                <line x1="350" y1="0" x2="350" y2="20" stroke-width="1" />
                <line x1="375" y1="0" x2="375" y2="20" stroke-width="1" />
                <line x1="400" y1="0" x2="400" y2="30" stroke-width="1" />
                <line x1="425" y1="0" x2="425" y2="20" stroke-width="1" />
                <line x1="450" y1="0" x2="450" y2="20" stroke-width="1" />
                <line x1="475" y1="0" x2="475" y2="20" stroke-width="1" />
                <line x1="500" y1="0" x2="500" y2="30" stroke-width="1" />
                <text
                    x="500"
                    y="50"
                    writing-mode="lr"
                    glyph-orientation-horizontal="00"
                    rotate="0"
                    fill="#aaa"
                    font-size="20"
                    text-anchor="end"
                >500</text>
            </g>
        </svg>
    </div>
</template>
<style scoped>
.info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em;
    margin-bottom: 2em;
}
</style>