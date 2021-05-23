import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = Array(anecdotes.length).fill(0)

const allZeroes = () => {
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] !== 0) {
      return false
    }
  }
  return true
}

const biggest = () => {
  let big = 0
  let index = 0
  for (let i = 0; i < votes.length; ++i) {
    if (big < votes[i]) {
      index = i
      big = votes[i]
    }
  }
  return index
}

const Mostvotes = () => {
  if (allZeroes()) {
    return null
  }
  let big = biggest()
  return (
    <div>
      <h1>
        Anecdote with most votes
      </h1>
      <p>
        {anecdotes[big]}
      </p>
      <p>
        has {votes[big]} votes
      </p>
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)

  const [voted, setVoted] = useState(0)

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    votes[selected] += 1
    setVoted(voted + 1)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>
        vote
      </button>
      <button onClick={handleClick}>
        next anecdote
      </button>
      <Mostvotes/>
    </div>
  )
}

export default App