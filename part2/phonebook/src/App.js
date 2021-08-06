import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personServices from './Services/persons'


const App = () => {
  const [data, setData] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const check = data.find(dt => dt.name === newName)
    if (check) {
      personServices.updateData(check.id)
        .then((response) => {
          setSuccess(`Updated ${response.data.name} successfully`)
          const successMessage = document.getElementById('successMessage').style;
          successMessage.border = '3px solid green';
          successMessage.color = 'green';
          successMessage.backgroundColor = 'lightgrey';
          successMessage.padding = '0px 20px';
          successMessage.margin = '10px';
          successMessage.borderRadius = '8px';
          setTimeout(() => {
            setSuccess('')
            successMessage.border = 'none';
            successMessage.color = 'none';
            successMessage.backgroundColor = 'none';
            successMessage.margin = '0px';
            successMessage.padding = '0px';
            successMessage.borderRadius = '0px';
          }, 5000)


        })
        .catch((error) => {
          setError(error.message)
          const errorMessage = document.getElementById('errorMessage').style;
          errorMessage.border = '3px solid red';
          errorMessage.color = 'red';
          errorMessage.backgroundColor = 'lightgrey';
          errorMessage.padding = '0px 20px';
          errorMessage.margin = '10px';
          errorMessage.borderRadius = '8px';
          setTimeout(() => {
            setSuccess('')
            errorMessage.border = 'none';
            errorMessage.color = 'none';
            errorMessage.backgroundColor = 'none';
            errorMessage.margin = '0px';
            errorMessage.padding = '0px';
            errorMessage.borderRadius = '0px';
            errorMessage.display = 'none';
          }, 5000)
        })
    } else {
      const newData = { name: newName, number: newNumber };
      personServices
        .saveData(newData)
        .then((response) => {
          setSuccess(`Added ${response.data.name} successfully`)
          const successMessage = document.getElementById('successMessage').style;
          successMessage.border = '3px solid green';
          successMessage.color = 'green';
          successMessage.backgroundColor = 'lightgrey';
          successMessage.padding = '0px 20px';
          successMessage.margin = '10px';
          successMessage.borderRadius = '8px';
          setTimeout(() => {
            setSuccess('')
            successMessage.border = 'none';
            successMessage.color = 'none';
            successMessage.backgroundColor = 'none';
            successMessage.margin = '0px';
            successMessage.padding = '0px';
            successMessage.borderRadius = '0px';
          }, 5000)


        })

        .catch((error) => {
          setError(error.message)
          const errorMessage = document.getElementById('errorMessage').style;
          errorMessage.border = '3px solid red';
          errorMessage.color = 'red';
          errorMessage.backgroundColor = 'lightgrey';
          errorMessage.padding = '0px 20px';
          errorMessage.margin = '10px';
          errorMessage.borderRadius = '8px';
          setTimeout(() => {
            setSuccess('')
            errorMessage.border = 'none';
            errorMessage.color = 'none';
            errorMessage.backgroundColor = 'none';
            errorMessage.margin = '0px';
            errorMessage.padding = '0px';
            errorMessage.borderRadius = '0px';
            errorMessage.display = 'none';
          }, 5000)
        })
    };
  }

  useEffect(() => {
    const getAll = () => {
      personServices.getAllData().then(response => {
        if (search !== '') {
          const filteredData = response.data.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
          setData(filteredData)
        } else {
          setData(response.data)
          console.log(response.data)
        }
      })
    }
    getAll()
  }, [search])

  const remove = (id) => {

    personServices.removeData(id)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.message))
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setSearch={setSearch} ></Filter>

      <h3>add a new</h3>
      <div id="successMessage">
        <h3>{success}</h3>
      </div>
      <div id="errorMessage">
        <h3>{error}</h3>
      </div>
      <PersonForm addName={addName} setNewName={setNewName} setNewNumber={setNewNumber} ></PersonForm>

      <h3>Numbers</h3>

      <Persons data={data} remove={remove}></Persons>
    </div>
  )
}

export default App