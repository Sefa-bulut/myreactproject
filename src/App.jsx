import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProducList from './components/ProductList'

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <ProducList/>
    </div>
  )
}

export default App
