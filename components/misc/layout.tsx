import React from 'react'
import Header from './header'

type Props = {
  children: React.ReactNode,
  isNew: boolean,
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden wrapper">
      <Header />
      <main className="grow">
        {children}
      </main>
    </div>
  )
}

export default Layout
