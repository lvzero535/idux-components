export interface Props {
  text: string
}

export type ButtonProps = Props

export const ButtonProps = {
  text: {
    type: String,
    required: true,
  },
}
