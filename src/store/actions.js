import axios from 'axios'
import cart from '../../static/cart.json'

export const getProducts = ({ commit }) => {
  return axios.get('/static/products.json').then(res => {
    commit('setProducts', res.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })
  cart.push({
    product_id: product.id,
    quantity
  })
}

export const getCart = ({ commit }) => {
  return axios.get('/static/cart.json').then(res => {
    commit('setCart', res.data)
    return Promise.resolve()
  })
}

export const removeProductFromCart = ({ commit }, productId) => {
  commit('removeFromCart', productId)
  cart.splice(productId, 1)
}

export const removeAllProductsFromCart = ({commit}) => {
  commit('clearCart')
  cart.splice(0, cart.length)
}
