export async function delay(miliseconds: number) {
  return new Promise((r) => setTimeout(r, miliseconds))
}
