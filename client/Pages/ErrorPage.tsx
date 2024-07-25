import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center p-5">
        <h1 className="font-heading text-heading-lg font-heading-bold text-spamBlue p-5">
          Whoops! That page can't be found.
        </h1>
        <img src="./images/spam-gif.gif" />
      </section>
      <Footer />
    </>
  )
}

export default ErrorPage
