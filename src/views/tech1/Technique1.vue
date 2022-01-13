<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Technique 1: Just swap it out for a readable version of the graphic</h1>
  <div>
    <div class="full-version">
      <img src="images/examples/Steps to apply.png" />
    </div>
    <div class="small-version">
      <h2>Steps:</h2>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.</li>
        <li>Duis ut diam quam nulla porttitor massa id. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</li>
        <li>Nunc vel risus commodo viverra maecenas accumsan lacus vel.</li>
        <li>Proin fermentum leo vel orci. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.</li>
        <li>Nibh cras pulvinar mattis nunc sed blandit libero.</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.full-version {
  display: block;
}
.small-version {
  display: none;
}
@media screen and (max-width: 1000px) {
  .full-version {
    display: none;
  }
  .small-version {
    display: block;
  }
}
</style>