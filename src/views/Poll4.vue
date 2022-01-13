<script lang="ts">
import { defineComponent, PropType } from "vue";
import PollIndicator from "../components/PollIndicator.vue";

interface IComponentData {}
export default defineComponent({components: {PollIndicator}});
</script>

<template>
    <h1>Using SVG for page layout?</h1>
    <PollIndicator :index="4"/>
</template>
