import { defineComponent, createVNode } from 'vue';
import { IxButton } from '@idux/components/button';

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

var index = (app) => {
    console.log(IsButton);
    app.component(IsButton.name, IsButton);
};

export { IsButton, index as default };
