import { PostModel } from "@/model/PostModal"

export interface IPostRepository {
  findAllPublic(): Promise<PostModel[]>
  findAll(): Promise<PostModel[]>
  findById(id: string): Promise<PostModel | undefined>
  findBySlug(slug: string): Promise<PostModel | undefined>
  create(post: PostModel): Promise<PostModel>
  delete(id: string): Promise<void>
  update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">
  ): Promise<PostModel>
}
