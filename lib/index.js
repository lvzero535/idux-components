import { defineComponent, createVNode, ref, watch } from 'vue';
import { IxButton } from '@idux/components/button';
import { IxInput } from '@idux/components/input';
import { IxSelectOption, IxSelect } from '@idux/components/select';

const ButtonProps = {
    text: {
        type: String,
        required: true
    }
};

var IsButton = defineComponent({
  props: ButtonProps,
  name: 'IsButton',

  setup(props) {
    const onClickHandler = () => {
      console.log('onClickHandler', arguments);
    };

    return () => createVNode(IxButton, {
      "onClick": onClickHandler,
      "mode": "primary"
    }, {
      default: () => [props.text]
    });
  }

});

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

const components = [
    IsButton, IsInput, IsSelect
];
var index = (app) => {
    components.forEach((component) => app.component(component.name, component));
};

export { index as default };
