import clsx from "clsx"
import { ComponentProps } from "react"

type InputFieldProps = {
  lableText: string
} & ComponentProps<"input">

export function InputCheckBox({ lableText, ...props }: InputFieldProps) {
  return (
    <>
      <input
        type="checkbox"
        id={lableText}
        {...props}
        className={clsx("h-4 w-4", props.className)}
      />
      <label htmlFor={lableText}>{lableText}</label>
    </>
  )
}
