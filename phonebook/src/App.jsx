import { useState, useEffect } from 'react'
import phoneServices from './services'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    phoneServices
    .getAll()
    .then(data => setPersons(data))
  }, [persons])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      if (confirm(`${newName} is already in the phonebook. Do you want to update their number?`)) {
        const person = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        const newPerson = {...person, number: newNumber}
        phoneServices.updateOld(person.id, newPerson)
        setPersons([...persons, newPerson])
        setNewName('')
        setNewNumber('')
        return;
      } else {
        return
      }
    } else if (!newName || !newNumber) {
      return alert('New entries must include both a name and number')
    }
    const newPerson = {
      name: newName,
      number: newNumber.toString(),
      id: Math.floor(Math.random() * 10000).toString()
    }
    phoneServices.createNew(newPerson)
    setPersons([...persons, newPerson])
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = ({target}) => {
    setNewName(target.value)
  }

  const handleNumberChange = ({target}) => {
    setNewNumber(target.value)
  }

  const handleFilter = ({target}) => {
    setFilterName(target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h4>Filter</h4>
      <input value={filterName} onChange={handleFilter} />
      <h4>Add a new Name</h4>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase())).map(({name, number, id}) => (
      
      <div key={id}>
        {name}: {number} <button onClick={() => phoneServices.deleteEntry(id.toString())}>delete</button>
        </div>))}
    </div>
  )
}

export default App