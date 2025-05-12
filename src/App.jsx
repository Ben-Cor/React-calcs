import { useState } from 'react'
import Header from './components/Header'
import CalcBasic from './components/CalcBasic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <CalcBasic />
    </div>
  )
}

export default App
