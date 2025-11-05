import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/about'
import Topics from './components/Topics/Topics'
import Kit from './components/KitMindPet/Kit'
import AboutApp from './components/AboutApp/AboutApp'
import Contact from './components/Contact/Contact'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Topics/>
    <Kit/>
    <AboutApp/>
    <Contact/>
    </>
  )
}
