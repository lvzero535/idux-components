import { MountingOptions, mount } from '@vue/test-utils'

import IxsButton from '../src/Button'
import { ButtonProps } from '../src/types'

describe('Button', () => {
  const ButtonMount = (options?: MountingOptions<Partial<ButtonProps>>) => mount(IxsButton, { ...options })

  test('text work', async () => {
    const text = 'primary'
    const wrapper = ButtonMount({ props: { text } })

    expect(wrapper.element.tagName).toEqual('BUTTON')
    expect(wrapper.element.textContent).toEqual(text)
  })
})
