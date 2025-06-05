import { useState } from 'react'
import Header from './components/Header'
import CalcBasic from './components/CalcBasic'
import InvestmentCalc from './components/InvestmentCalc'
import BAsicCalc from './pages/BasicCalc'
import InvestCalcPage from './pages/InvestCalcPage'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <div className='bg-gray-100 min-h-screen'>
        <Header />
        <CalcBasic />
        <InvestmentCalc />
      </div>

      <Routes>
        <Route path="/basiccalc" element={<BasicCalc />} />
        <Route path="/investmentcalc" element={<InvestCalcPage />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
