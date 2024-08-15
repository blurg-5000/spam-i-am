import { useQuery } from '@tanstack/react-query'
import { getAllSpams } from '../apis/apiClient'
import ErrorPage from './ErrorPage'
import { Link } from 'react-router-dom'

function RateSpam() {
  const { data, isError } = useQuery({
    queryKey: ['spams'],
    queryFn: getAllSpams,
  })

  if (isError) return <ErrorPage />

  if (data)
    return (
      <>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="pb-4 font-body text-body-lg font-body-bold">
            The SPAM family
          </h1>

          <div className="grid grid-cols-3 gap-8 p-6">
            {data.map((spam) => (
              <Link to={`/rate-spam/${spam.id}/`}>
                <section className="p-8" key={spam.id}>
                  <img
                    src={`./images/hero images/${spam.image}`}
                    alt={spam.name}
                    className="w-48"
                  />
                </section>
              </Link>
            ))}
          </div>
        </div>
      </>
    )
}

export default RateSpam
