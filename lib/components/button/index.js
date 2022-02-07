import { defineComponent, createVNode } from 'vue';
import { IxButton } from '@idux/components/button';

const ButtonProps = {
    text: {
        type: String,
        required: true,
    },
};

var IxsButton = defineComponent({
  name: 'IxsButton',
  props: ButtonProps,

  setup(props) {
    const onClickHandler = (...rest) => {
      console.log('onClickHandler', rest);
    };

    return () => createVNode(IxButton, {
      "onClick": onClickHandler,
      "mode": "primary"
    }, {
      default: () => [props.text]
    });
  }

});

var index = (app) => {
    console.log(IxsButton);
    app.component(IxsButton.name, IxsButton);
};

export { IxsButton, index as default };
