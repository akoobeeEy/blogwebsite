import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import {Layout} from "./components/index"
import { About, Account, Blog, Blogs, Category, Home, Login, MyBlogs, NotFound, Register } from "./pages"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {
const {isAuthenticated} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="category" element={<Category/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="blogs/:id" element={<Blog/>} />
          <Route path="about" element={<About/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />


                {isAuthenticated ? (
            <Route path="my-blogs" element={<MyBlogs />} />
          ) : null}
          {isAuthenticated ? (
            <Route path="account" element={<Account />} />
          ) : null}
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
