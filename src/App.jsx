import { useState } from 'react'
import Header from './components/Header'
import CalcBasic from './components/CalcBasic'
import InvestmentCalc from './components/InvestmentCalc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <CalcBasic />
      <InvestmentCalc />
    </div>
  )
}

export default App
