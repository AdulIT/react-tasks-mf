import React, { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import PizzaList from './components/PizzaList/PizzaList'

const pizzaData = [
  {
    id: 0,
    pizzaName: 'Chipotle',
    dough: 'Italian',
    price: '3550',
  },
  {
    id: 1,
    pizzaName: 'Double Cheesse',
    dough: 'American',
    price: '3050',
  },
  {
    id: 2,
    pizzaName: 'Pepperoni',
    dough: 'France',
    price: '3150',
  },
  {
    id: 3,
    pizzaName: 'Margarita',
    dough: 'Japan',
    price: '3150',
  },
  {
    id: 4,
    pizzaName: 'Cheesy Chicken',
    dough: 'Kazakh',
    price: '3550',
  },
  {
    id: 5,
    pizzaName: 'Cheesburger',
    dough: 'Russian',
    price: '3650',
  },
  {
    id: 6,
    pizzaName: 'Meaty',
    dough: 'African',
    price: '3550',
  },
  {
    id: 7,
    pizzaName: 'Pizza burrito',
    dough: 'Barbarossian',
    price: '3250',
  },
  {
    id: 8,
    pizzaName: '4 cheesess',
    dough: 'Korean',
    price: '3550',
  },
  {
    id: 9,
    pizzaName: 'Chocolate pizza',
    dough: 'Italian',
    price: '3550',
  },
  {
    id: 10,
    pizzaName: 'Pizza doner',
    dough: 'American',
    price: '3550',
  },
]

function App() {
  const [pizzas, setPizzas] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() =>
  {
    setPizzas(pizzaData)
    setSearchResults(pizzaData)
  }, [])


  return (
    <div className='App'>
      <h1 style={{textAlign: 'center'}}>Search in Pizzas 🍕</h1>

      <SearchBar pizzas={pizzas} setSearchResults={setSearchResults} />
      <PizzaList searchResults={searchResults} />
    </div>
  )
}

export default App
