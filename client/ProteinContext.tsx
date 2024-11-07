import { createContext, useContext, useState, ReactNode } from 'react'

type ProteinContextType = {
  isTofu: boolean
  setIsTofu: (value: boolean) => void
}

// Create a context with a default value that will be replaced by the provider
const ProteinContext = createContext<ProteinContextType | undefined>(undefined)

export function ProteinProvider({ children }: { children: ReactNode }) {
  const [isTofu, setIsTofu] = useState<boolean>(false)

  return (
    <ProteinContext.Provider value={{ isTofu, setIsTofu }}>
      {children}
    </ProteinContext.Provider>
  )
}

export function useProtein(): ProteinContextType {
  const context = useContext(ProteinContext)
  if (!context) {
    throw new Error('useProtein must be used within a ProteinProvider')
  }
  return context
}
