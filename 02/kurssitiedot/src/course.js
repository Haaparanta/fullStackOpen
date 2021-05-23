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
    let initialValue = 0
    const total = parts.reduce( (s, p) => {
      return s + p.exercises
    }, initialValue)
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    console.log(course)
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div> 
    )
  }

  export default Course