import { createContext, useContext } from "react"

const GlobalContext = createContext();
export const useUserInfos = () => useContext(GlobalContext);

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{ name: "Traveler" }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalContextProvider;