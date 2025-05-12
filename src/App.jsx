import { useState } from 'react'
import Header from './components/Header'
import CalcBasic from './components/CalcBasic'
import InvestmentInputs from './components/InvestmentInputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <CalcBasic />
      <InvestmentInputs />
    </div>
  )
}

export default App
