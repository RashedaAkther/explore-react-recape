import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Concepts of React Recape</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>props</li>
        <li>Event Handler</li>
        <li>state</li>
        <li>Loading Data(adding useEffect)</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
