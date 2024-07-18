export const initialState = {
  userName: "Jhon Doe",
  email: "jhondoe@gmail.com",
  phone: "773545845",
  products: [],
}

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      console.log("Adding a product to the cart", payload);
      return {
        ...state,
        products: [...state.products, payload]
      }
    case "DELETE_PRODUCT":
      console.log("Removing a product from the cart", payload);
      return {
        ...state,
        products: state.products.filter(
          (currentProduct) => currentProduct.id !== payload),
      }
    default:
      throw new Error("This action doesnt exist")
  }
}