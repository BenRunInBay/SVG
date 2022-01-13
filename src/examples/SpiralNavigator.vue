<script lang="ts">
/**
 * SpiralNavigator
 */
import { defineComponent, PropType } from "vue";

import { ResizeSVGViewBox } from "../lib/ui/ResizeSVGViewBox";
import { ElementShifter } from "../lib/ui/ElementShifter";
import { SVGCoordinates } from "../lib/ui/SVGCoordinates";

const RENDER_DELAY = 500;

interface IComponentData {
  shifter: ElementShifter | undefined;
  svgResizer: ResizeSVGViewBox;
}
export default defineComponent({
  props: {
    demonstrate: Boolean
  },
  data() {
    return {
      shifter: undefined,
      svgResizer: new ResizeSVGViewBox()
    } as IComponentData;
  },
  mounted() {
    if (this.$refs.graphic) {
      // get reference to the SVG container element
      let svgMainElement: SVGElement = this.$refs.graphic as SVGElement;
      // create an ElementShifter instance that finds the group nodes matching the given selector
      this.shifter = new ElementShifter(svgMainElement, "g[id*='group']");
      // watch for window resizing to then adjust the SVG layout
      this.svgResizer.observeSizeUsingEventModel(svgMainElement, this.adjustLayout);
    }
  },
  methods: {
    adjustLayout(svgMainElement: SVGElement, viewBoxWidth: number, viewBoxHeight: number): void {
      this.shifter?.adjustLayout(viewBoxWidth);
      setTimeout(()=>{
        this.drawConnectingLines();
      }, RENDER_DELAY);
    },
    drawConnectingLines() {
      let svgMainElement: SVGElement = this.$refs.graphic as SVGElement;
      if (svgMainElement) {
        SVGCoordinates.connectLineBetween("#center-to-1", "#topic1-group", "#center-group", svgMainElement);
        SVGCoordinates.connectLineBetween("#center-to-2", "#topic2-group", "#center-group", svgMainElement);
        SVGCoordinates.connectLineBetween("#center-to-3", "#topic3-group", "#center-group", svgMainElement);
      }
    }
  },
  beforeUnmount() {
    if (this.svgResizer) this.svgResizer.stopObserving();
  }
});
</script>
<template>
  <div>
    <svg
      ref="graphic"
      viewBox="0 0 1000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{'outline': demonstrate}"
    >
      <g id="spiral-diagram">
        <line id="center-to-1" x1="0" y1="0" x2="0" y2="0" stroke="white" />
        <line id="center-to-2" x1="0" y1="0" x2="0" y2="0" :stroke="demonstrate ? '#ffe600' : 'white'" stroke-width="3" />
        <line id="center-to-3" x1="0" y1="0" x2="0" y2="0" stroke="white" stroke-dasharray="10,10" />
        <g id="topic1-group">
          <rect id="Rectangle 1" x="51" y="33" width="252" height="103" fill="#C4C4C4" />
          <text
            id="Understanding the customer"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="24"
            letter-spacing="0em"
          >
            <tspan x="79.707" y="77.2031">Understanding the</tspan>
            <tspan x="126.805" y="105.203">customer</tspan>
          </text>
        </g>
        <g id="topic2-group">
          <rect id="Rectangle 2" x="696" y="33" width="252" height="103" :fill="demonstrate ? '#ffe600' : '#C4C4C4'" />
          <text
            id="Networking to build relationships"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="24"
            letter-spacing="0em"
          >
            <tspan x="717.789" y="77.2031">Networking to build</tspan>
            <tspan x="752.793" y="105.203">relationships</tspan>
          </text>
        </g>
        <g id="topic3-group">
          <rect id="Rectangle 3" x="375" y="447" width="252" height="103" fill="#C4C4C4" />
          <text
            id="Developing new skills"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="24"
            letter-spacing="0em"
          >
            <tspan x="416.488" y="492.203">Developing new</tspan>
            <tspan x="473.289" y="520.203">skills</tspan>
          </text>
        </g>
        <g id="center-group">
          <circle id="Ellipse 1" cx="500.5" cy="264.5" r="90.5" fill="#813333" />
          <text
            id="Objectives"
            fill="white"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="36"
            letter-spacing="0em"
          >
            <tspan x="416.557" y="277.305">Objectives</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
</style>
