import React, { useState } from 'react'

var copy = false

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const checkForCopies = (props) => {
    if (props.name === newName) {
      copy = true
    }
  }

  const addPerson = (event) => {
    console.log(newName, newNumber)
    copy = false
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    persons.forEach(checkForCopies)
    if (copy === false) {
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>name: <input 
        value = {newName} 
        onChange = {handlePersonChange}
        /></div>
        <div>number: <input 
        value = {newNumber} 
        onChange = {handleNumberChange}
        /></div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => <p key={person.name}> {person.name} {person.number} </p>)}</ul>
    </div>
  )

}

export default App
