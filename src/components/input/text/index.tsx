import clsx from "clsx"
import { ComponentProps } from "react"

type InputFieldProps = {
  lableText: string
} & ComponentProps<"input">

export function InputField({ lableText, ...props }: InputFieldProps) {
  return (
    <>
      <label htmlFor={lableText && lableText} className="text-sm font-semibold">
        {lableText}
      </label>
      <input
        id={lableText}
        {...props}
        className={clsx(
          "w-full rounded p-2 ring-2 ring-zinc-400 outline-0 focus:ring-zinc-500",
          "disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:ring-zinc-300 disabled:placeholder:text-zinc-400",
          props.className
        )}
      />
    </>
  )
}
