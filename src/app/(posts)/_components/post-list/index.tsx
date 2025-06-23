import { PostCard } from "../post-card"

export function PostList() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <PostCard
        imageCover="/bryen_0.png"
        title="Titulo do post"
        date="23/06/2025 10:10"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati
      id vero doloremque! Cupiditate, nemo debitis! Atque eveniet voluptates"
      />
    </section>
  )
}
