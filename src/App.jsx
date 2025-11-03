import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header/>
    </>
  )
}
