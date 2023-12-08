<template>
  <div>
    <component :is="getComponent('Test2')" />
  </div>
</template>


<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const getComponent = (name : string) =>  defineAsyncComponent(() => import(`../../renderer/${name}.vue`));

</script>
