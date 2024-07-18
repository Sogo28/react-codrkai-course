import { createContext, useContext, useReducer } from "react"
import { appReducer, initialState } from "../reducer/appReducer";

const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product
    })
  }

  const removeFromCart = (id) => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id
    })
  }

  const value = {
    userName: state.userName,
    email: state.email,
    phone: state.phone,
    products: state.products,
    addToCart,
    removeFromCart,
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useUserInfos = () => useContext(GlobalContext);
