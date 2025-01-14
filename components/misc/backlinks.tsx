import Link from "next/link"
import NotePreview from "./note-preview"

type Props = {
  backlinks: {
    [k: string]: {
      title: string
      excerpt: string
    }
  }
}

const Backlinks = ({ backlinks }: Props) => {
  return (
    <>
      {Object.keys(backlinks).map((slug, index) => {
        const post = backlinks[slug];
        return [
          <div>
            <a className="internal-link backlink" href={`/${slug}`}>{post.title}</a>
          </div>,
          (index === Object.keys(backlinks).length - 1 ? null : "|")
        ]
      })}
    </>
  )
}

export default Backlinks
