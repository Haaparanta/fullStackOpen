import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )  
}

const Part = ({part, exercises}) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercise1}/>
      <Part part={props.part2} exercises={props.exercise2}/>
      <Part part={props.part3} exercises={props.exercise3}/>
    </div>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App