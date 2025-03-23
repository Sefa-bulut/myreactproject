import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-48 object-contain mb-4"/>
      <h2 className="text-gray-600 font-semibold text-lg mb-2 truncate ">{product.title}</h2>
      <p className="text-black mb-2 text-2xl font-bold ">${product.price}</p>
      <button onClick={handleAddToCart}
        className="mt-auto bg-amber-400 hover:bg-amber-600 text-black py-2 px-4 rounded-xl transition hover:scale-105">
        Sepete Ekle
      </button>
    </div>
  )
}

export default ProductCard
