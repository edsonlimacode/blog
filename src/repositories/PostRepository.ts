import { PostModel } from "@/model/PostModal"
import { IPostRepository } from "./IPostRepository"
import { db } from "@/db/drizzle"
import { postsTable } from "@/db/drizzle/schemas"
import { eq } from "drizzle-orm"

export class PostRepository implements IPostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await db.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: (posts, { desc }) => desc(posts.createdAt)
    })

    return posts
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await db.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt)
    })

    return posts
  }

  async findById(id: string): Promise<PostModel | undefined> {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    })

    return post
  }

  async findBySlug(slug: string): Promise<PostModel | undefined> {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.slug, slug)
    })

    return post
  }

  async create(post: PostModel): Promise<PostModel> {
    const postExists = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.slug, post.slug),
      columns: { id: true }
    })

    if (!!postExists) {
      throw new Error("Post com já existe na base de dados")
    }

    await db.insert(postsTable).values(post)
    return post
  }

  async delete(id: string) {
    const post = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    })

    if (!post) {
      throw new Error("Post não existe")
    }

    await db.delete(postsTable).where(eq(postsTable.id, id))
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">
  ): Promise<PostModel> {
    const oldPost = await db.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id)
    })

    if (!oldPost) {
      throw new Error("Post não existe")
    }

    const updatedAt = new Date()
    const postData = {
      author: newPostData.author,
      content: newPostData.content,
      coverImageUrl: newPostData.coverImageUrl,
      excerpt: newPostData.excerpt,
      published: newPostData.published,
      title: newPostData.title,
      updatedAt
    }
    await db.update(postsTable).set(postData).where(eq(postsTable.id, id))

    return {
      ...oldPost,
      ...postData
    }
  }
}

export const postRepository: IPostRepository = new PostRepository()
