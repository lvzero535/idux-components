<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <IxButton mode="primary">Primary</IxButton>
  <IxButton>Default</IxButton>
  <IxButton mode="dashed">Dashed</IxButton>
  <IxButton mode="text">Text</IxButton>
  <IxButton mode="link" href="https://github.com/IDuxFE/idux" target="_blank">Link</IxButton>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
