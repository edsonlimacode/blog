export type PostModal = {
  id: string | null
  title: string
  slug: string
  excerpt: string
  content: string
  coverImageUrl: string
  published: boolean | null
  createdAt: Date
  updatedAt: Date
  author: string
}
