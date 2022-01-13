<script lang="ts">
import { defineComponent, PropType } from "vue";

import SpiralNavigator from "../../examples/SpiralNavigator.vue";

interface IComponentData { }
export default defineComponent({
  components: {
    SpiralNavigator
  },
  data() {
    return {

    };
  }
});
</script>

<template>
  <h1>Spiral navigator</h1>
  <SpiralNavigator />
</template>
