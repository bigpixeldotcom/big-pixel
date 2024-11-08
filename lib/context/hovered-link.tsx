'use client'
 
import { createContext, useState, useContext } from 'react'
 
export const HoveredLinkContext = createContext({
  face: 'front',
  setFace: (face: string) => {},
  url: '/',
  setUrl: (url: string) => {},
})
 
export default function HoveredLinkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [face, setFace] = useState('front')
  const [url, setUrl] = useState('/')

  return (
    <HoveredLinkContext.Provider
      value={{ face, setFace, url, setUrl }}
    >
      {children}
    </HoveredLinkContext.Provider>
  )
}

export function useHoveredLink() {
  return useContext(HoveredLinkContext)
}