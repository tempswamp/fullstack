import { useState } from 'react'

const Stats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad  
  if(all === 0)
  {
    return (<div>No feedback was given!</div>)
  }
  return(
    <div><StatsLine input="Good" value={good}/>
        <StatsLine input="Neutral" value={neutral}/>
        <StatsLine input="Bad" value={bad}/>
        <StatsLine input="All" value={good + neutral + bad} />
        <StatsLine input="Average" value={(good - bad)/all} />
        <StatsLine input="Positive" value={(good / all)*100 + " %"} />
        </div>
  )
}

const StatsLine = ({ input, value}) => (
  <div>{input}: {value}</div>
)

const Button = ({ handleClick, input }) => (
  <button onClick={handleClick}>{input}</button>
)

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
      <Button handleClick={handleGood} input="Good" />
      <Button handleClick={handleNeutral} input="Neutral" />
      <Button handleClick={handleBad} input="Bad" />
      <h1>Stats</h1>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App