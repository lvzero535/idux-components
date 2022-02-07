import { IxButton } from '@idux/components/button'
import { defineComponent } from 'vue'
import { ButtonProps } from './types'

export default defineComponent({
  name: 'IxsButton',
  props: ButtonProps,
  setup(props) {
    const onClickHandler = (...rest: any[]) => {
      console.log('onClickHandler', rest)
    }
    return () => (
      <IxButton onClick={onClickHandler} mode="primary">
        {props.text}
      </IxButton>
    )
  },
})
