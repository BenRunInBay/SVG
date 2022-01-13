<script lang="ts">
/**
 * StepsFanSlice
 */
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    percent: {type:Number,required:true},
    index: Number,
    linePercent: {type:Number,required:true},
    color: { type: String, default: "#747480" },
    marker: { type: String, default: "url(#arrowhead)" },
    lineColor: { type: String, default: "#ffe600" },
    visible: { type: Boolean, default: true },
  },
  computed: {
    pathData() {
      return this.computePathData(this.percent);
    },
    lineEndX() {
      return this.getLineCoordinatesForPercent(this.linePercent)[0];
    },
    lineEndY() {
      return this.getLineCoordinatesForPercent(this.linePercent)[1];
    },
  },
  methods: {
    getCoordinatesForPercent(percent:number) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      return [x, y];
    },
    getLineCoordinatesForPercent(percent:number) {
      const x = Math.cos(2 * Math.PI * percent) * 1.2;
      const y = Math.sin(2 * Math.PI * percent) * 1.2;
      return [x, y];
    },
    computePathData(percent:number) {
      const startX = this.getCoordinatesForPercent(0)[0];
      const startY = this.getCoordinatesForPercent(0)[1];
      const endX = this.getCoordinatesForPercent(percent)[0];
      const endY = this.getCoordinatesForPercent(percent)[1];
      return [
        `M ${startX} ${startY}`,
        `A 1 1 0 0 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(" ");
    },
  },
});
</script>
<template>
  <g>
    <line
      :id="`stepline${index}`"
      x1="0"
      y1="0"
      :x2="lineEndX"
      :y2="lineEndY"
      :stroke="lineColor"
      stroke-width="0.03"
      :marker-end="marker"
      v-show="visible"
    />
    <path :d="pathData" :fill="color" />
  </g>
</template>