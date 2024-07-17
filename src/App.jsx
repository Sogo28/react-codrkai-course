import Router from "./components/Router"
import GlobalContextProvider from "./context/GlobalContext"
function App() {
  const userInfos = {
    name: "Traveler",
    email: "user@gmail.com",
    loggedIn: true,
  }
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  )
}

export default App
