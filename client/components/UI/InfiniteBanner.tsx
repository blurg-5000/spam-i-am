import { useProteins } from '../../hooks/useProteins'
import { useProtein } from '../../ProteinContext'

interface Props {
  isReversed: React.SetStateAction<boolean>
}

function InfiniteBanner({ isReversed }: Props) {
  const { data } = useProteins()
  const isTofu = useProtein()

  console.log(data)

  if (data)
    return (
      <div className="overflow-x-hidden">
        <div className="inline-flex w-full flex-nowrap">
          <ul
            className={`${isReversed ? `animate-infiniteScrollBackwards` : `animate-infiniteScroll`} flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8`}
          >
            {/* the below code infinitely loops the array of images  */}
            {[...data, ...data, ...data].map((spam, index) => (
              <li key={index}>
                <img
                  src={`/images/${isTofu ? 'tofu_images' : 'hero_images'}/${spam.image}`}
                  alt={spam.name}
                  className="cover w-28"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default InfiniteBanner
