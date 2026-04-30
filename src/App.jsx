import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Exercicios from './pages/Exercicios'
import Exercicio2 from './pages/Exercicio2'


function App() {

  return (
    <>

    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Exercicios" element={<Exercicios/>} />
        <Route path="Exercicio2" element={<Exercicio2/>} />
      </Routes>

      <Footer/>
      </>
  )
}

export default App
