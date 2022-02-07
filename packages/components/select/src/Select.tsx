import { IxSelect, IxSelectOption } from '@idux/components/select';
import { ref, watch } from 'vue';
import { defineComponent } from 'vue';
import { IsSelectProps } from './types';

export default defineComponent({
  name: 'IsSelect',
  props: IsSelectProps,
  setup(props) {
    const value = ref('tom')
    watch(value, (nv) => {
      console.log('===> ',nv);
    })
    // const options = props.options;
    const options = [
      { key: 1, label: 'Tom', value: 'tom' },
      { key: 2, label: 'Jerry', value: 'jerry' },
      { key: 3, label: 'Speike', value: 'speike', disabled: true },
    ]
    return () => {
      const selectOption = options.map((option) => (
        <IxSelectOption key={option.key} value={option.value} disabled={option.disabled}>
          <span style="margin-left: 8px">{ option.label }</span>
        </IxSelectOption>
      ))
      return (
        <IxSelect v-model:value={value.value} options={options}>
          {/* {selectOption} */}
        </IxSelect>
      )
    }
  }
})