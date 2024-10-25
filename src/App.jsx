import { useState } from 'react'
import { Button } from 'antd'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import ProductTable from './components/ProductTable'
import Home from './components/Home'
import ProductInfo from './components/ProductInfo'
import CreateProduct from './components/CreateProduct'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductTable />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="products/:id" element={<ProductInfo />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
