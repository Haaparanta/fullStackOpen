import React, { useState } from 'react'
import axios from 'axios'

const PersonList = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personsArray = persons.map(object => object.name)

        const personObject = {
            name: newName,
            number: newNumber
        }

        if (personsArray.includes(`${personObject.name}`)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            axios
                .post('http://localhost:3001/persons', personObject)
                .then(response => setPersons(persons.concat(response.data)))
        }


        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => setNewName(event.target.value)

    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                /><br />
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonList