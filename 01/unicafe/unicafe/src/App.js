import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
          good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
          neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
          bad
      </button>
      <h1>Statistics</h1>
      <p1>Good {good} <br/> </p1>
      <p1>Neutral {neutral} <br/> </p1>
      <p1>Bad {bad} </p1>
    </div>
  )
}

export default App