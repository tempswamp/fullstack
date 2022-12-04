import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

   return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Good</button>
      <button onClick={handleBad}>Good</button>
      <h1>Stats</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {(good - bad)/all}</p>
      <p>Positive: {(good/all)*100} %</p>
    </div>
  )
}

export default App