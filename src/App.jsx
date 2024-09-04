import React from 'react'
import "./App.css"
import Header from './components/Header'
import FilterSection from './components/FilterSection'
import FoodItems from './components/FoodItems'
const App = () => {
  return (
    <>
    <Header/>
    <FilterSection/>
    <FoodItems/>
    </>
  )
}

export default App
