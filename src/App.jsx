import React from "react"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <div className="bg-zinc-100 flex flex-col justify-between min-h-screen">
      <Navbar/>
      <main className="flex-grow max-w-screen-lg mx-auto w-full p-4">
        <Container/>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
