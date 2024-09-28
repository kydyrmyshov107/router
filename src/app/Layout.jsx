
import { Outlet } from "react-router-dom"
import { Footer, Header } from "../widgets"

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
       <Outlet/>
      </main>
      <Footer/>
      
    </div>
  )
}

export default Layout
