import { defineComponent, ref, watch, createVNode } from 'vue';
import { IxSelectOption, IxSelect } from '@idux/components/select';

const IxsSelectProps = {
    options: {
        type: Array,
        required: true,
    },
};

var IxsSelect = defineComponent({
  name: 'IxsSelect',
  props: IxsSelectProps,

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
    console.log(IxsSelect);
    app.component(IxsSelect.name, IxsSelect);
};

export { IxsSelect, index as default };
