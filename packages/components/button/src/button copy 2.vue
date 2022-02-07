<script lang="ts">
import { ButtonProps } from './types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IxsButton',
  props: ButtonProps,
})
</script>
<template>
  <IxButton mode="primary">
    {{ text }}
  </IxButton>
</template>
