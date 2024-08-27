import { useParams } from 'react-router-dom'
import { useCommentsById } from '../../hooks/useComments'

function ListComments() {
  // TODO: call a custom hook (that uses useQuery) to get all comments for this specific spam.
  // TODO: useParams to get the unique spamId
  const { id } = useParams()
  const { data } = useCommentsById(Number(id))
  return (
    <>
      {/* <p>A list of comments for this SPAM flavour</p> */}
      <ul>
        {data?.map((comment) => (
          <>
            <li>{comment.comment_text}</li>
            <li>
              {/* Created on: */}
              {new Date(Number(comment.created_date)).toLocaleString()}
            </li>
            {/* By:  */}
            <li>{comment.user_id}</li>
            <br></br>
          </>
        ))}
      </ul>
    </>
  )
}

export default ListComments
