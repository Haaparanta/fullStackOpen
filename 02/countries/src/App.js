import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './country'

const App = () => {
  const [country, setCountry] = useState("") 
  const [countries, setCountries] = useState([]) 
  const [countriesFilter, setCountriesFilter] = useState([])
  const [showCountry, setShowCountry] = useState({}) 

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    setShowCountry(
      countriesFilter.length === 1 ? { ...countriesFilter[0] } : {}
    )
  }, [countriesFilter])

  const searchCountry = (object) => {
    setCountry(object.target.value)
    setCountriesFilter(
      countries.filter(
        (country) =>
          country.name.toLowerCase().search(object.target.value.toLowerCase()) !== -1
      )
    )
  }

  const showCountries = () => { //when push show button show that countries info
    return countriesFilter.map((country) => (
      <p key={country.name}>
        {country.name}
        <button onClick={() => setShowCountry(country)}>show</button>
      </p>
    ))
  }

  return (
    <>
      <p>
        find countries{" "}
        <input value={country} onChange={searchCountry} />
      </p>
      {countriesFilter.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        showCountries()
      )}
      {showCountry.name && <Country data={showCountry} />}
    </>
  )
}

export default App