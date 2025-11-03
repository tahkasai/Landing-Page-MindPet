import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header/>
    <Banner/>
    </>
  )
}
