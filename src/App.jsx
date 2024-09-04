import React from 'react'
import "./App.css"
import Header from './components/Header'
import FilterSection from './components/FilterSection'
import FoodItems from './components/FoodItems'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <FilterSection/>
    <FoodItems/>
    <Footer/>
    </>
  )
}

export default App
