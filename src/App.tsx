import {  Routes, Route  } from "react-router"

import Home from "./pages/Home"
import WriteUpTemplate from "./pages/WriteUpTemplate"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import WriteUpDirectory from "./pages/WriteUpDirectory"

function App() {

  return (
    <div className="flex flex-col h-[min(100vh)]">
      <NavBar/>
      <main className="flex grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/write-ups" element={<WriteUpDirectory/>}/>
          <Route path="/write-ups/:slug" element={<WriteUpTemplate/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
