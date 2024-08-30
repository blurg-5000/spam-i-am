import { useAboutImages, useAboutText } from '../hooks/useAbout'

function About() {
  const aboutHistoryQuery = useAboutText()

  const aboutImagesQuery = useAboutImages()

  if (aboutHistoryQuery.isPending) {
    return <p>Loading SPAM's loooooooooooong history...</p>
  }

  if (aboutImagesQuery.isPending) {
    return <p>Loading SPAM's mean images...</p>
  }

  if (aboutHistoryQuery.isError) {
    return (
      <p>{`Oh no, SPAM history did not exist! ${aboutHistoryQuery.error}`}</p>
    )
  }

  if (aboutImagesQuery.isError) {
    return (
      <p>{`Oh no, SPAM images did not exist! ${aboutImagesQuery.error}`}</p>
    )
  }

  return (
    // TODO: Style this page!
    <>
      <div>
        <section>
          <article>
            <h1>The history of SPAM</h1>
            {aboutHistoryQuery.data.map((section) => (
              <div key={section.id}>
                <section>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              </div>
            ))}
          </article>
        </section>
        <br />
        <section>
          <h1>The images of SPAM</h1>
          {aboutImagesQuery.data.map((image) => (
            <div key={image.id}>
              <img src={image.link} alt={image.alt} />
              <p>
                <em>{image.caption}</em>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default About
