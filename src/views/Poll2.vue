<script lang="ts">
import { defineComponent, PropType } from "vue";
import PollIndicator from "../components/PollIndicator.vue";

interface IComponentData { }
export default defineComponent({components: {PollIndicator}});
</script>

<template>
  <h1>What is your knowledge of SVG?</h1>
  <PollIndicator :index="2"/>
</template>
