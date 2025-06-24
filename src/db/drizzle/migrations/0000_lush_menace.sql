CREATE TABLE "posts" (
	"id" uuid,
	"title" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"author" varchar NOT NULL,
	"excerpt" varchar NOT NULL,
	"content" varchar NOT NULL,
	"coverImageUrl" varchar NOT NULL,
	"published" boolean DEFAULT true,
	"createAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "posts_slug_unique" UNIQUE("slug")
);
