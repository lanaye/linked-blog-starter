import DateFormatter from "../misc/date-formatter"

type Props = {
  date?: string,
}

const PostMeta = ({
  date
}: Props) => {
  return (
    <>
      <div className="flex items-center">

        {date && (<span className="text-gray-600"><DateFormatter dateString={date} /></span>)}
      </div>
    </>
  )
}

export default PostMeta;
