"use server"

export async function createPostAction(preState: number) {
  console.log(preState)
  return preState + 1
}
