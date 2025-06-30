import { postRepositoryDb } from "@/repositories/PostRepositoryDb"
import { BtnDeletePost } from "./_components/btn-delete-post"
export async function PostsList() {
  const posts = await postRepositoryDb.findAll()

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="mb-2 flex justify-between rounded bg-zinc-300 p-4"
          >
            <h1 key={post.id}>{post.title}</h1>
            <div className="flex items-center gap-4">
              {!post.published && (
                <small className="rounded bg-red-400 p-0.5 px-2 font-bold text-white">
                  não publicado
                </small>
              )}
              <BtnDeletePost id={post.id} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
