import React, { useState } from 'react'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubjectChange = (event) => {
    console.log(event.target.value)
  setNewName(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName
    }
    setPersons(persons.concat(newContact))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {newPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleSubjectChange}/>
        </div>
        <div>
          
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person => <p key={person.name}> {person.name} </p>)}</ul>
    </div>
  )

}

export default App