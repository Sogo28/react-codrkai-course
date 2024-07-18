import Router from "./components/Router"
import GlobalContextProvider from "./context/GlobalContext"
function App() {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  )
}

export default App
