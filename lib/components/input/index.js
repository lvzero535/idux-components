import { defineComponent, ref, watch, createVNode } from 'vue';
import { IxInput } from '@idux/components/input';

var IxsInput = defineComponent({
  name: 'IxsInput',

  setup() {
    const value = ref('a');
    watch(value, nv => {
      console.log('===> ', nv);
    });
    return () => {
      return createVNode(IxInput, {
        "value": value.value,
        "onUpdate:value": $event => value.value = $event,
        "placeholder": "Isput placeholder"
      }, null);
    };
  }

});

var index = (app) => {
    console.log(IxsInput);
    app.component(IxsInput.name, IxsInput);
};

export { IxsInput, index as default };
