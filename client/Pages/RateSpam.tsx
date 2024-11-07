import ErrorPage from './ErrorPage'
import { Link } from 'react-router-dom'
import { useProteins } from '../hooks/useProteins'
import RatingAvg from '../components/RateSpam/RatingAvg'
import { useProtein } from '../ProteinContext'

function RateSpam() {
  const { data, isError } = useProteins()

  const { isTofu, toggleProtein } = useProtein()

  if (isError) return <ErrorPage />

  if (data)
    return (
      <>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="pb-4 font-body text-body-lg font-body-bold">
            The {isTofu ? 'Tofu' : 'SPAM'} family
          </h1>
          <div className="grid grid-cols-3 gap-8 p-6">
            {data.map((spam) => (
              <section key={spam.id} className="p-8">
                <Link to={`/rate-spam/${spam.id}/`}>
                  <img
                    src={`/images/${isTofu ? 'tofu_images' : 'hero_images'}/${spam.image}`}
                    alt={spam.name}
                    className="w-48"
                  />
                  <h2 className="pb-4 font-body text-body-md font-body-bold">
                    {spam.name}
                  </h2>
                </Link>
                <RatingAvg spamId={spam.id} />
              </section>
            ))}
          </div>
        </div>
      </>
    )
}

export default RateSpam
