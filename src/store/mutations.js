export const setProducts = (state, products) => state.products = products

export const appendToCart = (state, {product, quantity}) => {
  const existing = state.cart.find(item => item.product.id === product.id)

  if (existing) {
    existing.quantity += 1
  } else {
    state.cart.push({
      product,
      quantity
    })
  }
}

export const setCart = (state, cart) => state.cart = cart

export const removeFromCart = (state, productId) => {
  const existing = state.cart.find(item => item.product.id === productId)
  if (existing.quantity > 1) {
    existing.quantity -= 1
  } else {
    state.cart = state.cart.filter(item => item.product.id !== productId)
  }
}

export const clearCart = state => state.cart = []
