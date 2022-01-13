<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IComponentData { }
export default defineComponent({});
</script>

<template>
  <h1>Problem: an SVG will scale to its parent</h1>
  <div class="two">
    <ul>
      <li>You can move elements in the SVG...</li>
      <li>But resizing scales the entire viewBox</li>
    </ul>
    <svg viewBox="0 0 1000 1500" class="outline">
      <rect x="0" y="500" width="300" height="400" fill="#b9e" />
      <circle cx="500" cy="500" r="300" fill="#a24" />
      <text x="20" y="100" font-family="Arial" font-size="40" fill="#fff">SVG Text</text>
    </svg>
  </div>
</template>
