import React from 'react'

// lisätty omaksi tiedostokseen, koska jos näitä olisi paljon app.js olisi sekava

const Filters = ({ onChange, value }) => {
    return (
        <div>
            Filter shown with <input onChange={onChange} value={value}></input>
        </div>
    )
}

export default Filters