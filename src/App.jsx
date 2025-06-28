import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<>
      <div>
        <Navbar/>
        <Home/>
      </div>
      <Footer/>
      </>
    },
    {
      path:"/About",
      element:<>
      <Navbar/>
      <About/>
      <Footer/>
      </>
    }
  ])

  return (
    <div className="bg-stone-200 flex flex-col justify-between min-h-screen">
      
      {/* <main className="flex-grow max-w-screen-lg mx-auto w-full p-4"> */}
        {/* <Container/> */}
        <RouterProvider router={router}/>
      
    </div>
    
  )
}

export default App
