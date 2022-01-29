import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import Filters from './components/Filters.js'
import PersonList from './components/PersonsList.js'
import comms from './components/Communicate.js'


const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('Getting data')
    comms
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const [filter, setFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons) 

  const handleFilterChange = (e) => { 
    setFilter(e.target.value)
    setFilterPersons(persons.filter((person) =>
      (person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1))) 
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <Filters onChange={handleFilterChange} value={filter} /> 
      <h2>add a new</h2>
      <PersonList persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <table>
        <tbody>
          {filter === '' ?
            <Persons filterPerson={persons} />
            :
            <Persons filterPerson={filterPersons} />
          }
        </tbody>
      </table>
    </div>
  )
}

export default App