import { PostModal } from "@/model/PostModal"

export interface IPostRepository {
  findAllPublic(): Promise<PostModal[]>
  findAll(): Promise<PostModal[]>
  findById(id: string): Promise<PostModal | undefined>
  findBySlug(slug: string): Promise<PostModal | undefined>
}
