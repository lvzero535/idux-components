import { IxInput } from '@idux/components/input';
import { ref, watch } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IsInput',
  setup() {
    const value = ref('a')
    watch(value, (nv) => {
      console.log('===> ',nv);
    })
    return () => {
      return <IxInput v-model:value={value.value} placeholder="Isput placeholder"></IxInput>
    }
  }
})