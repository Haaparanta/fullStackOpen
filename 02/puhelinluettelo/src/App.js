import React, { useState, useEffect } from 'react'
import Persons from './components/Persons.js' // Perjaatessa pieniä moduuleita
import Filters from './components/Filters.js'
import PersonList from './components/PersonsList.js'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('Getting data')
    axios
      .get('http://localhost:3001/persons')
      .then(data => {
        console.log('Got data')
        setPersons(data.data)
      })
  }, [])

  const [filter, setFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons) // oletetaan että kaikki on näkyvissä alussa

  const handleFilterChange = (e) => { // kun muutetaan filteriä eli kutsutaan aina kun filterin tekstikenttä päivittyy
    setFilter(e.target.value)
    setFilterPersons(persons.filter((person) =>
      (person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1))) // muokkaa listaa sen mukaan löytääkö sen filteriä vastaava stringiä
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