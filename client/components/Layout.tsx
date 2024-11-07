import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { useIsFetching } from '@tanstack/react-query'
import { createContext, useState } from 'react'

export default function Layout() {
  const [isTofu, setIsTofu] = useState(false)
  const protein = isTofu ? 'tofu' : 'spam'
  const ProteinContext = createContext('spam')

  const isFetching = useIsFetching()

  return (
    // <ProteinContext.Provider value={protein}>
    <section className="flex h-screen flex-col justify-between">
      <Header isTofu={isTofu} setIsTofu={setIsTofu} />
      <main className="mb-auto">
        {Boolean(isFetching) && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-spamYellow bg-opacity-40">
            <LoadingSpinner />
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </section>
    // </ProteinContext.Provider>
  )
}
