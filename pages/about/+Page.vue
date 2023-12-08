<template>
  <component :is="getComponent('Test2')" />
</template>


<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const rawComponents = import.meta.glob('/renderer/**/*.vue');
const components = new Map<string, () => Promise<{ [key: string]: unknown; }>>();

for (const path in rawComponents) {
    const name = path.split('/').reverse()[0].replace('.vue', '');
    components.set(name, rawComponents[path]);
}

const getComponent = (name : string) => {
  const ci =components.get(name);

  if (ci !== undefined) {
      return defineAsyncComponent(async () => {
          return ci();
      });
  }

  return undefined;
};

</script>
