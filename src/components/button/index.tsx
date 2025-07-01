import clsx from "clsx"
import { ComponentProps, ComponentType, ReactNode } from "react"

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
      className={clsx("rounded-md p-2 text-white", buttonVariants[variant])}
    />
  )
}
