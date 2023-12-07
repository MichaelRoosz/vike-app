<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive.
      <Counter />
    </li>
  </ul>
  <component is="Test2" />
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
</script>
