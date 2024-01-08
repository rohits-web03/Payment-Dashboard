import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PaymentDashboard from './components/Payments/PaymentDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-start w-full'>
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        {/* Payments Dashboard */}
        <PaymentDashboard />
      </div>
    </>
  )
}

export default App
