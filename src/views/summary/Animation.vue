<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Animation</h1>
  <div class="two">
    <ul>
      <li class="demo">SVG SMIL using animate element</li>
      <li>CSS animations</li>
      <li>
        Javascript:
        <ul>
          <li>Greensock</li>
          <li>Snap</li>
          <li>Web Animations API</li>
        </ul>
      </li>
    </ul>
    <svg ref="graphic" viewBox="0 0 1000 1000" class="outline">
      <rect x="0" y="500" width="300" height="400" fill="#b9e">
        <animate
          attributeName="x"
          values="0;700;0"
          dur="15s"
          keyTimes="0;.3;1"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="500" cy="500" r="300" fill="#a24">
        <animate
          attributeName="r"
          values="300;200;300"
          dur="5s"
          keyTimes="0;.7;1"
          repeatCount="indefinite"
        />
      </circle>
      <text x="20" y="100" font-family="Arial" font-size="80" fill="#fff">Animated SVG</text>
    </svg>
  </div>
</template>
