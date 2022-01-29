import React from 'react'

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