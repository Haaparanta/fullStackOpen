import React from 'react'
import comms from './Communicate.js'

const Persons = ({ filterPerson, setPersons }) => {

    const isDelete = (person) => {
        const result = window.confirm('Delete ' + person.name)
        if (result) {
            comms
                .deletePerson(person.id)
            setPersons(filterPerson.filter(item => item !== person))
        }
    }

    return (
        filterPerson.map((object) =>
            <p>
                {object.name}
                {" "}
                {object.number}
                {" "}
                <button onClick={() => isDelete(object)}>Delete</button>
            </p>
        )
    )
}


export default Persons