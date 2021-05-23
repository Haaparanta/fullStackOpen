import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  
  return (
    <div>
      <h1>Statistics</h1>
      <p1>Good {good} <br/></p1>
      <p1>Neutral {neutral} <br/></p1>
      <p1>Bad {bad} <br/></p1>
      <p1>All {good+neutral+bad} <br/></p1>
      <p1>Average {(good-bad)/(good+neutral+bad)} <br/></p1>
      <p1>Positive {(good)/(good+neutral+bad)}</p1>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => handleGoodClick()}>
          good
      </button>
      <button onClick={() => handleNeutralClick()}>
          neutral
      </button>
      <button onClick={() => handleBadClick()}>
          bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App