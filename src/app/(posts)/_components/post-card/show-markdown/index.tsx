import Markdown from "react-markdown"
import rehypeSanitize from "rehype-sanitize"
import remarkGfm from "remark-gfm"

export function ShowMarkDown({ content }: { content: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        table: ({ node, ...props }) => {
          if (!node?.children) return ""

          return (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]" {...props} />
            </div>
          )
        }
      }}
    >
      {content}
    </Markdown>
  )
}
