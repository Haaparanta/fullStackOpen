import React, { useState } from 'react'

// lisätty omaksi tiedostokseen, koska jos näitä olisi paljon app.js olisi sekava

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

        personsArray.includes(`${personObject.name}`) ? // if lause kysymysmerkillä 
            alert(`${newName} is already added to phonebook`) : // ennen kaksoispistettä jos on 'truthy'
            setPersons(persons.concat(personObject)) // kaksoispisteen jos ehto 'falsy'

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