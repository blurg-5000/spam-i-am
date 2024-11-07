import React, { createContext, useContext, useState } from 'react'

type ProteinContextType = {
  isTofu: boolean
  toggleProtein: () => void
}

const ProteinContext = createContext<ProteinContextType | undefined>(undefined)

export const ProteinProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTofu, setIsTofu] = useState(false)

  const toggleProtein = () => {
    setIsTofu((prev) => !prev)
  }

  return (
    <ProteinContext.Provider value={{ isTofu, toggleProtein }}>
      {children}
    </ProteinContext.Provider>
  )
}

export const useProtein = () => {
  const context = useContext(ProteinContext)
  if (context === undefined) {
    throw new Error('useProtein must be used within a ProteinProvider')
  }
  return context
}
