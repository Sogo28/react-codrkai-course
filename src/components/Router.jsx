import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import MainLayout from "../layouts/MainLayout"
import AboutLayout from "../layouts/AboutLayout"
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<AboutLayout />}>
          <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router