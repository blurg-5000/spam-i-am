import { useParams } from 'react-router-dom'
import { useFetchCommentsBySpamId } from '../../hooks/useComments'

interface Props {
  spamId: number
}

function ListComments(props: Props) {
  // TODO: call a custom hook (that uses useQuery) to get all comments for this specific spam.
  // TODO: useParams to get the unique spamId
  const { spamId } = props

  const { data, isLoading, isError, error } = useFetchCommentsBySpamId(
    Number(spamId),
  )
  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError) {
    console.error(error.message)
    return <p>error</p>
  }

  if (data)
    return (
      <>
        <h4>Comments</h4>
        <ul>
          {data.map((commentSpamObj) => (
            <div key={commentSpamObj.id}>
              <li>{commentSpamObj.comment_text}</li>
              <li>
                {new Date(commentSpamObj.created_date).toLocaleDateString()}
              </li>
              <br></br>
            </div>
          ))}
        </ul>
      </>
    )
}

export default ListComments
