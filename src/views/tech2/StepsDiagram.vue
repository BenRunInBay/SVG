<script lang="ts">
import { defineComponent, PropType } from "vue";
import StepsFan from "../../examples/steps/StepsFan.vue";

interface IComponentData { }
export default defineComponent({
  components: { StepsFan },
  data() {
    return {
      steps: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus.",
        "Odio tempor orci dapibus ultrices in iaculis. Lacus vestibulum sed arcu non odio euismod lacinia at quis. ",
        "Id eu nisl nunc mi ipsum faucibus vitae aliquet. Nibh nisl condimentum id venenatis a. ",
        "Ultrices in iaculis nunc sed augue lacus viverra vitae. ",
        "Arcu bibendum at varius vel. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Lacus luctus accumsan tortor posuere.",
      ]
    }
  }
});
</script>

<template>
  <h1>Technique 2 applied to the Steps diagram</h1>
  <StepsFan label="Steps" :steps="steps" class="web-example" />
</template>
