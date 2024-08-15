import { useQuery } from '@tanstack/react-query'
import { getSpamById } from '../apis/apiClient'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Rating from './Rating'

function SpamDetails() {
  const { id } = useParams()

  const { data, isError } = useQuery({
    queryKey: ['spams'],
    queryFn: () => getSpamById(Number(id)),
  })

  if (isError) return <ErrorPage />

  if (data)
    return (
      <section>
        <section className="p-8" key={data.id}>
          <img
            src={`./images/hero images/${data.image}`}
            alt={data.name}
            className="w-48"
          />
          <div className="font-body text-body-md">
            <h2 className="font-body-bold">{data.name}</h2>
            <p>
              <strong>Description:</strong> {data.description}
            </p>
            <p>
              <strong>Flavour profile:</strong> {data.flavour_profile}
            </p>
          </div>
          <Rating spamId={data.id} />
        </section>
      </section>
    )
}

export default SpamDetails
