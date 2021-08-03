import React, { useState } from 'react'

var copy = false

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const checkForCopies = (props) => {
    if (props.name === newName) {
      copy = true
    }
  }

  const addPerson = (event) => {
    copy = false
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    persons.forEach(checkForCopies)
    if (copy === false) {
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <input 
        value = {newName} 
        onChange = {handlePersonChange}
        />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => <p key={person.name}> {person.name} </p>)}</ul>
    </div>
  )

}

export default App
