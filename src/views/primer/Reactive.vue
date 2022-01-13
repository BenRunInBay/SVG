<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({
  data() {
    return {
      content: "Vintage phone"
    }
  }
});
</script>

<template>
  <h1>
    SVG can be reactive
    <em>but only</em> when used inline
  </h1>
  <div class="two">
    <div>
      <input type="text" v-model="content" />
      <ul>
        <li class="demo">
          Could render as SVG text
          <br />(using text-anchor attr)
        </li>
        <li>
          Or using foreignObject
          <br />defining the "bounding box" and allowing wrapping
        </li>
      </ul>
    </div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72 128">
      <g id="BG" />
      <g id="Icons">
        <g>
          <g>
            <path
              fill="#462500"
              d="M0,10.664v106.918c0,5.893,4.047,10.666,9.031,10.666h53.295c4.988,0,9.033-4.773,9.033-10.666V10.664
				C71.359,4.775,67.314,0,62.326,0H9.031C4.047,0,0,4.775,0,10.664z M35.68,121.66c-0.26,0-0.514-0.014-0.768-0.037h1.537
				C36.193,121.646,35.941,121.66,35.68,121.66z"
            />
            <path
              fill="#DA731C"
              d="M25.799,9.041c0,1.105,0.895,2.002,2,2.002h15.113c1.104,0,2-0.896,2-2.002l0,0
				c0-1.105-0.896-2.002-2-2.002H27.799C26.693,7.039,25.799,7.936,25.799,9.041L25.799,9.041z"
            />
            <rect x="5.881" y="18.729" fill="#48A98F" width="59.598" height="79.557" />
          </g>
          <g>
            <g>
              <path
                fill="#DA731C"
                d="M19.629,113.711c0,0.99,4.432,1.795,9.896,1.795h12.309c5.467,0,9.896-0.805,9.896-1.795v-2.232
					c0-0.99-4.43-1.795-9.896-1.795H29.525c-5.465,0-9.896,0.805-9.896,1.795V113.711z"
              />
            </g>
            <rect x="34.381" y="102.566" fill="#462500" width="2.598" height="20.057" />
          </g>
          <g>
            <g>
              <path
                fill="#462500"
                d="M58.15,58.633c-0.652,2.107-7.324,5.602-12.813,0.85c-4.455-3.855-7.363-5.082-9.66-2.115
					c-2.295-2.967-5.203-1.74-9.658,2.115c-5.488,4.752-12.16,1.258-12.811-0.85c-0.512,3.613,4.551,9.82,12.914,8.906
					c4.824-0.313,8.027-2.162,9.555-4.344c1.529,2.182,4.732,4.031,9.557,4.344C53.598,68.453,58.66,62.246,58.15,58.633z"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="labels">
        <text
          x="36"
          y="25"
          text-anchor="middle"
          fill="white"
          font-size="5"
          font-weight="bold"
        >{{ content }}</text>
        <foreignObject x="6" y="35" width="60" height="20" class="outline">
          <div
            style="font-size:5px; color:white; font-weight: bold; text-align:center;width:100%;"
          >{{ content }}</div>
        </foreignObject>
      </g>
    </svg>
  </div>
</template>
