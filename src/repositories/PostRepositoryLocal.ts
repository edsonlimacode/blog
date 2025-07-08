import { PostModal } from "@/model/PostModal"
import { IPostRepository } from "./IPostRepository"
import { resolve } from "path"
import { readFile } from "fs/promises"

export class PostRepositoryLocal implements IPostRepository {
  async findAll(): Promise<PostModal[]> {
    throw new Error("Method not implemented.")
  }
  private async loadFromDisk(): Promise<PostModal[]> {
    const path = resolve(process.cwd(), "src", "db", "seed", "posts.json")

    const result = await readFile(path, "utf-8")
    const { posts } = JSON.parse(result)
    return posts
  }

  async findAllPublic(): Promise<PostModal[]> {
    const posts = await this.loadFromDisk()
    return posts.filter((post) => post.published)
  }
  async findById(id: string): Promise<PostModal> {
    const posts = await this.loadFromDisk()
    const post = posts.find((post) => post.id === id)
    if (!post) {
      throw new Error("post not found")
    }

    return post
  }
  async findBySlug(slug: string): Promise<PostModal> {
    const posts = await this.loadFromDisk()
    const post = posts.find((post) => post.slug === slug)
    if (!post) {
      throw new Error("post not found")
    }

    return post
  }
}

export const postRepository: IPostRepository = new PostRepositoryLocal()
