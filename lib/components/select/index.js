import { defineComponent, ref, watch, createVNode } from 'vue';
import { IxSelectOption, IxSelect } from '@idux/components/select';

const IsSelectProps = {
    options: {
        type: Array,
        required: true
    }
};

var IsSelect = defineComponent({
  name: 'IsSelect',
  props: IsSelectProps,

  setup(props) {
    const value = ref('tom');
    watch(value, nv => {
      console.log('===> ', nv);
    }); // const options = props.options;

    const options = [{
      key: 1,
      label: 'Tom',
      value: 'tom'
    }, {
      key: 2,
      label: 'Jerry',
      value: 'jerry'
    }, {
      key: 3,
      label: 'Speike',
      value: 'speike',
      disabled: true
    }];
    return () => {
      options.map(option => createVNode(IxSelectOption, {
        "key": option.key,
        "value": option.value,
        "disabled": option.disabled
      }, {
        default: () => [createVNode("span", {
          "style": "margin-left: 8px"
        }, [option.label])]
      }));
      return createVNode(IxSelect, {
        "value": value.value,
        "onUpdate:value": $event => value.value = $event,
        "options": options
      }, null);
    };
  }

});

var index = (app) => {
    console.log(IsSelect);
    app.component(IsSelect.name, IsSelect);
};

export { IsSelect, index as default };
