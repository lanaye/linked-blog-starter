type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-w-[400px] bg-stone-800 rounded shadow-sm p-5 cursor-pointer text-lg hover:bg-stone-700 hover:border-transparent">
      <span className="block font-bold leading-snug tracking-tight mb-1">{title}</span>
      <span className="block font-normal whitespace-pre-line max-h-[150px]">{content}</span>
    </span>
  )
}

export default NotePreview
