<script lang="ts">
import { defineComponent, PropType } from "vue";
import PollIndicator from "../components/PollIndicator.vue";

interface IComponentData { }
export default defineComponent({components: {PollIndicator}});
</script>

<template>
  <h1>What is your role?</h1>
  <PollIndicator :index="1"/>
</template>
