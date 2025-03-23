import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { X, Minus, Plus } from 'lucide-react'
import { addToCart, removeFromCart, decreaseCartItem, clearCart } from '../redux/cartSlice'

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  // Sepet toplam fiyat
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-end z-50">
      <div className="bg-white w-full md:w-1/3 h-full md:h-auto p-4 flex flex-col justify-between overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4">Sepetiniz</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Sepetiniz boş.</p>
        ) : (
          <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-2 border-b pb-2">
                <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decreaseCartItem(item))}
                    className="p-1 bg-gray-200 rounded">
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="p-1 bg-gray-200 rounded">
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="p-1 text-red-500 hover:text-red-700">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Toplam:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-xl mt-4 hover:bg-blue-600 transition"
          onClick={()=>{
            dispatch(clearCart())
            alert("Satın alma başarılı! Teşekkür ederiz")
            onClose()
          }}> Satın Al </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
