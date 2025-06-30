import { PostModal } from "@/model/PostModal"
import { IPostRepository } from "./IPostRepository"
import { db } from "@/db/drizzle"

export class PostRepositoryDb implements IPostRepository {
  async findAllPublic(): Promise<PostModal[]> {
    const posts = await db.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt)
    })

    return posts
  }

  async findAll(): Promise<PostModal[]> {
    const posts = await db.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt)
    })

    return posts
  }

  async findById(id: string): Promise<PostModal | undefined> {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    })

    return post
  }

  async findBySlug(slug: string): Promise<PostModal | undefined> {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.slug, slug)
    })

    return post
  }
}

export const postRepositoryDb: IPostRepository = new PostRepositoryDb()
