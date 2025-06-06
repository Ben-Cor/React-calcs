import { useState } from 'react'
import Header from './components/Header'
import InvestCalcPage from './pages/InvestCalcPage'
import BasicCalc from './pages/BasicCalc'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/basiccalc" element={<BasicCalc />} />
        <Route path="/investmentcalc" element={<InvestCalcPage />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
