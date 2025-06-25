import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function formatDate(date: string) {
  const newDate = new Date(date)

  return format(newDate, "dd/MM/yyyy HH:mm", {
    locale: ptBR
  })
}
