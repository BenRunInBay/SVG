<script lang="ts">
/**
 * StepsFan
 */
import { defineComponent, PropType } from "vue";
import StepsFanSlice from "./StepsFanSlice.vue";

interface IState {
  description: string;
  visible: boolean;
}
interface ICompData {
  stepsState: IState[];
  stepsOffsets: string[];
}

export default defineComponent({
  components: {
    StepsFanSlice
  },
  props: {
    label: String,
    steps: { type: Array, required: true }
  },
  computed: {
    sliceSize() {
      if (this.steps.length > 0) return 0.5 / this.steps.length;
      else return 0.1;
    }
  },
  data: () => {
    return {
      stepsState: [],
      stepsOffsets: ["-10em", "-4em", "0em", "0em", "-4em", "-10em"]
    } as ICompData;
  },
  watch: {
    steps() {
      this.createState();
      this.animate();
    }
  },
  mounted() {
    this.createState();
    this.animate();
  },
  methods: {
    createState() {
      this.stepsState = this.steps.map((step) => {
        return { description: step, visible: false };
      }) as IState[];
    },
    animate() {
      this.stepsState.forEach((step, s) => {
        setTimeout(() => {
          step.visible = true;
        }, s * 500);
      });
    },
    attachStepLosenges() {
      this.steps.forEach((step, s) => {
        let lineEl = this.$el.querySelector(`#stepline${s}`),
          losengeEl = this.$el.querySelector(`#steplosenge${s}`);
        if (lineEl && losengeEl) {
          let lineRect = lineEl.getBoundingClientRect();
          losengeEl.style.top = `${lineRect.top}px`;
          losengeEl.style.left = `${lineRect.right}px`;
        }
      });
    }
  }
});
</script>
<template>
  <div class="steps-fan">
    <div class="steps-circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 2 2">
        <defs>
          <marker
            id="arrowheadgray"
            markerWidth="2"
            markerHeight="2"
            refX="0"
            refY="1"
            orient="auto"
          >
            <polygon points="0 0, 2 1, 0 2" style="fill: #747480" />
          </marker>
          <marker
            id="arrowheadyellow"
            markerWidth="2"
            markerHeight="2"
            refX="0"
            refY="1"
            orient="auto"
          >
            <polygon points="0 0, 2 1, 0 2" style="fill: #ffe600" />
          </marker>
        </defs>
        <g class="circle-base">
          <circle cx="0" cy="0" r="1" style="fill: #eee"></circle>
          <StepsFanSlice
            v-for="(step, s) in stepsState"
            :key="s"
            :id="`stepslice${s}`"
            :index="stepsState.length - s - 1"
            :percent="(stepsState.length - s) * sliceSize"
            :line-percent="(stepsState.length - s) * sliceSize - 0.05"
            :color="s % 2 == 0 ? '#ffe600' : '#747480'"
            :line-color="s % 2 == 0 ? '#747480' : '#ffe600'"
            :marker="
              s % 2 == 0 ? 'url(#arrowheadgray)' : 'url(#arrowheadyellow)'
            "
            :visible="stepsState[stepsState.length - s - 1].visible"
          />
        </g>
        <circle cx="0" cy="0" r="0.8" style="fill: #d2d3db"></circle>
        <circle cx="0" cy="0" r="0.7" style="fill: #f6f6fa"></circle>
        <text x="-0.3" y="-0.1" style="font-size: 0.1pt; color: #2e2e38">
          Steps once
        </text>
        <text x="-0.6" y="0.1" style="font-size: 0.1pt; color: #2e2e38">
          opportunity is won
        </text>
      </svg>
    </div>
    <div class="descriptions">
      <div v-for="(step, s) in stepsState" :key="s">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn"
        >
          <div
            :id="`steplosenge${s}`"
            :class="{
              'step-losenge': true,
              'step-losenge-alternate-color': s % 2 != 0
            }"
            :style="{
              'background-color': s % 2 == 0 ? '#ffe600' : '#747480',
              'margin-left': stepsOffsets[s],
              visibility: step.visible ? 'visible' : 'hidden'
            }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
              <circle cx="0" cy="0" r="50" style="fill: #fff"></circle>
              <text
                x="0"
                y="10"
                style="font-size: 30pt; color: #2e2e38"
                text-anchor="middle"
              >
                {{ s + 1 }}
              </text>
            </svg>
            <span class="step-description">{{ step.description }}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<style scoped>
.steps-fan {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.steps-circle {
  margin: 10%;
  display: flex;
  align-items: center;
}
.steps-circle svg {
  width: 100%;
  max-height: 500px;
  overflow: visible;
}
.steps-circle svg g.circle-base {
  transform: rotate(-0.25turn);
}
.step-losenge {
  color: #000;
  border-radius: 4em;
  padding: 1em 2em 1em 1em;
  width: 100%;
  min-height: 100px;
  margin-bottom: 0.5em;
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr 51fr;
}
.step-losenge svg {
  width: 70px;
}
.step-losenge-alternate-color {
  color: #fff;
}
.step-description {
  margin-left: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
@media screen and (max-width: 1000px) {
  .steps-fan {
    grid-template-columns: 1fr;
  }
  .steps-circle svg g.circle-base {
    transform: rotate(0turn);
  }
  .step-losenge {
    margin-left: 0em !important;
  }
}
@media screen and (max-width: 500px) {
}
</style>
