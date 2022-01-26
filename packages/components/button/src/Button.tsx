import { IxButton } from "@idux/components/button";
import { defineComponent } from "vue";
import { ButtonProps } from "./types";

export default defineComponent({
  props: ButtonProps,
  name: 'IsButton',
  setup(props) {
    const onClickHandler = () => {
      console.log('onClickHandler', arguments)
    }
    return () => (<IxButton onClick={onClickHandler} mode="primary">{props.text}</IxButton>)
  }
})