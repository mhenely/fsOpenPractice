import { useState, useEffect } from "react";
import axios from 'axios'

// make call to all countries
// filter available countries based on text input
  // only show first 10 matches
    // each match shoud have a button that shows country's info
  // when only one match, show info
    // capital, area, flag, and languages spoken



const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'


const App = () => {

  const [ countryList, setCountryList ] = useState([])
  const [ show, setShow ] = useState(null)
  const [ countryShow, setCountryShow ] = useState(null)
  const [ filter, setFilter ] = useState('')


  useEffect(() => {
    axios
      .get(URL)
      .then(res => {
        setCountryList(res.data)
      })

  }, [])

  const handleChange = ({target}) => {
    setFilter(target.value)
    const country = countryList.filter(c => c.name.common.toLowerCase().startsWith(target.value.toLowerCase()))
    if (country.length === 1) {
      console.log({country})
      setShow(country[0])
    } else {
      setShow(null)
    }
  }

  const handleClick = (country) => {
    console.log(country.name.common)
    if (!show || show.name.common.toLowerCase() !== country.name.common.toLowerCase()) {
      setShow(country)
    } else if (show.name.common.toLowerCase() === country.name.common.toLowerCase()) {
      setShow(null)
    }
  }

  return (
    <div>
      find countries: <input 
        value={filter}
        onChange={handleChange}
      />
      <h5>
        countries:
      </h5>
        {countryList.filter(c => c.name.common.toLowerCase().startsWith(filter.toLowerCase())).slice(0,9).map(country => (
          <div key={country.name.common}>
            {country.name.common}: <button onClick={() => handleClick(country)}>show</button>
          </div> 
        )
      )}
      {show && (
        <div>
          <h3>{show.name.common}</h3>
          <p>capital: {show.capital}</p>
          <p>area: {show.area}</p>
          <p>flag: {show.flag}</p>
          <div>
            languages spoken: {Object.values(show.languages).map(lang => <p key={lang}>{lang}</p>)}
          </div>
        </div>
      )}
    </div>
  )
}


export default App