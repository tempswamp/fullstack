import { useState } from 'react'

const Stats = ({good, neutral, bad}) => {
  const all = good + neutral + bad  
  return(
    <div> Good: {good}<br></br>
          Neutral: {neutral}<br></br>
          Bad: {bad}<br></br>
          All: {good + neutral + bad}<br></br>
          Average: {(good - bad)/all}<br></br>
          Positive: {(good / all)*100} %
        </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

   return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h1>Stats</h1>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App