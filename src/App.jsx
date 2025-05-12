import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CalcButton from './components/CalcButton'
import CalcOperationButton from './components/CalcOperationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CalcButton value="1" onClick={() => setCount(count + 1)} />
      <CalcOperationButton value="+" onClick={() => setCount(count + 1)} />
    </div>
  )
}

export default App
