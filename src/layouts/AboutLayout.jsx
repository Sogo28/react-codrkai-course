import { Outlet } from "react-router-dom"
import Header from "../components/Header"
function AboutLayout() {
  return (
    <>
      <h1>This is the About layout</h1>
      <Header />
      <Outlet />

    </>
  )
}

export default AboutLayout