import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const postsTable = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar().notNull(),
  slug: varchar().notNull().unique(),
  author: varchar().notNull(),
  excerpt: varchar().notNull(),
  content: varchar().notNull(),
  coverImageUrl: varchar().notNull(),
  published: boolean().default(true).notNull(),
  createdAt: timestamp({ withTimezone: false }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: false }).defaultNow().notNull()
})

export type PostsSelectMode = InferSelectModel<typeof postsTable>
export type PostsInsertMode = InferInsertModel<typeof postsTable>
