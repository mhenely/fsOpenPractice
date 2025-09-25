import axios from 'axios'

const URL = 'http://localhost:3001/persons';

const getAll = async () => {

  const array = await axios.get(URL)
  return array.data;
  
}

const createNew = (newPerson) => {
  return axios.post(URL, newPerson)
}

const updateOld = (id, newNumber) => {
  return axios.put(URL + '/' + id, newNumber)
}

const deleteEntry = (id) => {
  console.log('type of', typeof id)
  return axios.delete(`${URL}/${id}`)
}

export default { getAll, createNew, updateOld, deleteEntry }