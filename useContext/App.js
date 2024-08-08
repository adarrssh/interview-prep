import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './context/context'

const App = () => {
  const {count} = useContext(CounterContext)
  return (
    <div>App</div>
  )
}

export default App