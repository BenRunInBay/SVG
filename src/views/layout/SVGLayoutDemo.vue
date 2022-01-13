<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({
  data() {
    return {
      heading: "Starburst mid-century restoration services"
    }
  },
  methods: {
    learnMore() {
      self.open("//homedepot.com", "_blank");
    }
  }
});
</script>

<template>
  <h1>Responsive page layout using SVG</h1>
  <div class="web-example">
    <svg
      viewBox="0 0 1000 683"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="full-layout"
    >
      <g id="Layout-frame">
        <g id="services-1">
          <circle id="medium-left-dish" cx="159.5" cy="376.5" r="113.5" fill="#C49651" />
          <foreignObject id="info-block-1" x="88" y="297" width="143" height="156">
            <div class="bubble">
              <h2>Light construction</h2>
            </div>
          </foreignObject>
        </g>
        <g id="services-2">
          <circle id="small-center-dish" cx="377" cy="268" r="89" fill="#87637D" />
          <foreignObject id="info-block-2" x="322" y="209" width="110" height="115">
            <div class="bubble">
              <h3>Repair services</h3>
            </div>
          </foreignObject>
        </g>
        <g id="hard-hat">
          <mask
            id="mask0_0_1"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="512"
            y="157"
            width="400"
            height="400"
          >
            <circle id="big-right-dish" cx="712" cy="357" r="200" fill="#EABDAA" />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect
              id="concept-background"
              x="420" y="157" width="584" height="438"
              fill="url(#pattern0)"
            />
          </g>
        </g>
        <g id="learn-more" class="clickable" @click="learnMore">
          <circle id="small-right-dish" cx="833.5" cy="532.5" r="67.5" fill="#98A2C2" />
          <text
            id="Learn More"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="24"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="803.961" y="530.703">Learn&#10;</tspan>
            <tspan x="806.445" y="558.703">More</tspan>
          </text>
        </g>
        <foreignObject id="heading-block" x="91" y="56" width="450" height="110" class="heading-text">
          <h1 class="web-header">{{heading}}</h1>
        </foreignObject>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.000976562 0.00130208)"
          />
        </pattern>
        <image
          id="image0_0_1"
          width="1024"
          height="768"
          xlink:href="images/photos/optimized/clock-2021-08-29-01-13-27-utc.jpg"
        />
      </defs>
    </svg>
    <svg
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="phone-layout"
    >
      <g id="layout-frame-phone">
        <g id="services-1-phone">
          <circle id="medium-left-dish" cx="107" cy="193" r="65" fill="#C49651" />
          <foreignObject
            id="info-block-1"
            x="66.0529"
            y="147.471"
            width="81.8943"
            height="89.3392"
          >
            <div class="bubble">
              <h2>Light construction</h2>
            </div>
          </foreignObject>
        </g>
        <g id="services-2-phone">
          <circle id="small-center-dish" cx="254" cy="221" r="65" fill="#87637D" />
          <foreignObject id="info-block-2" x="213.831" y="177.91" width="80.3371" height="83.9888">
            <div class="bubble">
              <h3>Repair services</h3>
            </div>
          </foreignObject>
        </g>
        <g id="hard-hat-phone">
          <mask
            id="mask0-phone"
            style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="113"
            y="311"
            width="216"
            height="216"
          >
            <circle id="big-right-dish" cx="220.901" cy="418.901" r="107.901" fill="#EABDAA" />
          </mask>
          <g mask="url(#mask0-phone)">
            <rect
              id="construction-worker-hardhat-blueprints-and-const-2021-09-03-05-44-22-utc 1"
              x="60" y="303" width="322" height="241"
              fill="url(#pattern0-phone)"
            />
          </g>
        </g>
        <g id="learn-more-phone" class="clickable" @click="learnMore">
          <circle id="small-right-dish" cx="275" cy="513" r="54" fill="#98A2C2" />
          <text
            id="Learn More"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Roboto"
            font-size="24"
            font-weight="bold"
            letter-spacing="0em"
          >
            <tspan x="244.261" y="507.003">Learn&#10;</tspan>
            <tspan x="246.745" y="535.003">More</tspan>
          </text>
        </g>
        <foreignObject id="heading-block-phone" x="20" y="25" width="350" height="93">
          <h1 class="web-header">{{heading}}</h1>
        </foreignObject>
      </g>
      <defs>
        <pattern id="pattern0-phone" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0-phone"
            transform="translate(0 -0.00103734) scale(0.000976562 0.00130478)"
          />
        </pattern>
        <image
          id="image0-phone"
          width="1024"
          height="768"
          xlink:href="images/photos/optimized/clock-2021-08-29-01-13-27-utc.jpg"
        />
      </defs>
    </svg>
  </div>
</template>

<style scoped>
h1.web-header {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: 0;
  font-size: 32px;
}
.heading-text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  fill: white;
  font-size: 48px;
}
h2,
h3 {
  text-align: center;
  font-size: 24px;
}
div.bubble {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.full-layout {
  display: block;
}
.phone-layout {
  display: none;
}
@media screen and (max-width: 760px) {
  .full-layout {
    display: none;
  }
  .phone-layout {
    display: block;
  }

  h1.web-header {
    font-size: 24px;
  }
  h2, h3 {
    font-size: 14px;
  }
}
</style>