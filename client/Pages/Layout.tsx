import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout() {
  return (
    <section className="flex h-screen flex-col justify-between">
      <Header />
      <main className="mb-auto">
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}
