import { defineComponent, ref, watch, createVNode } from 'vue';
import { IxInput } from '@idux/components/input';

var IsInput = defineComponent({
  name: 'IsInput',

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
    console.log(IsInput);
    app.component(IsInput.name, IsInput);
};

export { IsInput, index as default };
