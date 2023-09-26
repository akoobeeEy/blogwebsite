import { Fragment } from "react"
import {Footer, Header} from "../index"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <main className="">
        <Outlet/>
          
        </main>
        <Footer/>
        </Fragment>
  )
}

export default Layout