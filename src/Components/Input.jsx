import React, { useId } from 'react'
import axios from "axios"




function Input() {

    const BASEURL = "https://631f505322cefb1edc48d318.mockapi.io/todos"
    
    const [newToDo, setNewToDo] = React.useState("")


    function handleChange(e) {
        setNewToDo(e.target.value)
    }

    function addToDo(event) {
        event.preventDefault()
        if (newToDo.length >= 3) {
            axios.post(BASEURL, {
            content: newToDo,
            isCompleted: false,
            id: useId
        })
            event.target.reset()
            setNewToDo("")
        } else {
            alert("Your input can't be shorter than 3 characters!")
        }
    } 

  return (
    <form onSubmit={addToDo} className="input-container">
        <input type="text" placeholder="Add a todo" onChange={handleChange}/>
        <button type='submit'>Add a To Do</button>
    </form>
  )
}

export default Input

