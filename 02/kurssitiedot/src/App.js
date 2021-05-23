import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )  
}

const Content = ({parts}) => {
  return (
    parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p>)
  )
}

const Total = ({parts}) => {
  let result = 0
  parts.forEach(part => result += part.exercises)
  return (
    <div>
      <p>Number of exercises {result}</p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div> 
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises : 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


export default App