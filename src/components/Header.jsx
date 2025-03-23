import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCart } from 'lucide-react'
import CartModal from './CartModal'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-800"> Dijital Ürünler </h1>

        <div className="relative cursor-pointer"
          onClick={() => {
            console.log('Sepete tıklandı')
            setIsCartOpen(true)
          }}>
          <ShoppingCart className="w-8 h-8 text-gray-700" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen}
        onClose={() => {
          console.log('Sepet kapatıldı')
          setIsCartOpen(false)
        }} />
    </>
  )
}

export default Header