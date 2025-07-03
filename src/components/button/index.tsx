import clsx from "clsx"
import { ComponentProps } from "react"

type ButtonProps = {
  variant: "default" | "ghost" | "danger"
} & ComponentProps<"button">

export function Button({ variant = "danger", ...props }: ButtonProps) {
  const buttonVariants = {
    default: "bg-zinc-800 hover:bg-zinc-900",
    danger: "bg-red-500 hover:bg-red-600",
    ghost: "bg-zinc-400 hover:bg-zinc-500"
  }

  return (
    <button
      {...props}
      className={clsx(
        "flex items-center gap-2 rounded-md px-4 py-2 text-white disabled:!cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-400 [&_svg]:h-5 [&_svg]:w-5",
        buttonVariants[variant],
        props.className
      )}
    />
  )
}
