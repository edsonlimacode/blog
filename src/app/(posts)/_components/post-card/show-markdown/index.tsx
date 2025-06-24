import Markdown from "react-markdown"
import rehypeSanitize from "rehype-sanitize"
import remarkGfm from "remark-gfm"

export function ShowMarkDown({ content }: { content: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
      {content}
    </Markdown>
  )
}
