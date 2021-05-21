import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )  
}

const Part = ({part}) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = ({part}) => {
  return (
    <div>
      <Part part={part.first}/>
      <Part part={part.second}/>
      <Part part={part.three}/>
    </div>
  )
}

const Total = ({part1, part2, part3}) => {
  return (
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content part={parts}/>
      <Total part={parts}/>
      
    </div>
  )
}


export default App