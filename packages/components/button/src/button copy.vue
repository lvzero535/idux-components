<script lang="ts" setup>
// import type { ButtonProps } from './types';

interface Props {
  text: string;
}
// console.log(ButtonProps, Props)
defineProps<Props>();

</script>
<script lang="ts">
export default {
  name: 'IsButton'
}
</script>
<template>
  <IxButton mode="primary">{{ text }}</IxButton>
</template>