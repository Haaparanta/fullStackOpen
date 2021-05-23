import React, { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <p1>
       {text} {value} <br/>
    </p1>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
         <h1>Statistics</h1>
         <p1>No feedback given</p1>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Neutral" value ={neutral} />
      <StatisticLine text="Bad" value ={bad} />
      <StatisticLine text="All" value ={good+neutral+bad} />
      <StatisticLine text="Average" value ={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text="Positive" value ={(good)/(good+neutral+bad)} />
    </div>
  )
}

const StatisticsWithTable = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
         <h1>Statistics with table</h1>
         <p1>No feedback given</p1>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics with table</h1>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{good+neutral+bad}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{(good-bad)/(good+neutral+bad)}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{(good)/(good+neutral+bad)}</td>
      </tr>
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <StatisticsWithTable good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App