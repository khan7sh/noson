import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import KenzaCoffee from './components/KenzaCoffee'
import BookTable from './components/BookTable'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main>
        <Menu />
        <KenzaCoffee />
        <BookTable />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App