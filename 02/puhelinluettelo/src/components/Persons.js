import React from 'react'

// lisätty omaksi tiedostokseen, koska jos näitä olisi paljon app.js olisi sekava

const Persons = ({ filterPerson }) => {
    return (
        filterPerson.map((object, key) =>
            <tr key={key}>
                <td>{object.name}</td>
                <td>{object.number}</td>
            </tr>
        )
    )
}

export default Persons