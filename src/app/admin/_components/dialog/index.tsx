"use client"

import { Button } from "@/components/button"
import clsx from "clsx"

type DialogProps = {
  disabled: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function Dialog({ onConfirm, onCancel, disabled = false }: DialogProps) {
  return (
    <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-xs">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-2xl space-y-8 rounded-2xl bg-white p-4">
          <span className="block text-xl font-bold text-zinc-900">
            Titulo do post
          </span>
          <p>Tem certeza que deseja deletar o post ?</p>
          <div className="flex justify-around">
            <Button
              variant="danger"
              disabled={disabled}
              onClick={onCancel}
              className={clsx(
                "rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition-all hover:bg-red-500",
                {
                  "!cursor-not-allowed bg-zinc-300 hover:bg-zinc-300": disabled
                }
              )}
            >
              Cancelar
            </Button>
            <Button
              variant="default"
              disabled={disabled}
              onClick={onConfirm}
              className={clsx(
                "rounded-md bg-emerald-600 px-4 py-2 font-semibold text-white transition-all hover:bg-emerald-500",
                {
                  "!cursor-not-allowed bg-zinc-300 hover:bg-zinc-300": disabled
                }
              )}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
