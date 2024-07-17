import { Outlet } from "react-router-dom"
import Header from "../components/Header"
function MainLayout() {
  return (
    <>
      <h1>This is the main layout</h1>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout