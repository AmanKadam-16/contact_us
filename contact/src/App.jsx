import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUsPage from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactUsPage />
    </>
  )
}

export default App
