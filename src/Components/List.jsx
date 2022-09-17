import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

function List() {
  const BASEURL = "https://631f505322cefb1edc48d318.mockapi.io/todos"

  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    axios.get(BASEURL).then((response) => {
      setList(response.data);
    });
  }, [list]);

  function deleteToDo(e) {
    const targetId = (e.target.parentElement.id).toString()
    axios
      .delete(`${BASEURL}/${targetId}`)
      .then(() => {
        alert("Item deleted!");
      });
  }

  function toggleCompleted(e) {
    const targetId = (e.target.parentElement.id).toString()
    const newList = list.map(item => {
      if (item.id === targetId) {
        const updatedItem = {
          ...item,
          isCompleted: !item.isCompleted
        }
        return updatedItem
      }
      return item
    })
    setList(newList)
  }

  function updateToDo(e){
    const targetId = (e.target.parentElement.id).toString()
    axios
      .put(`${BASEURL}/${targetId}`, {
        content: prompt("Update to do:"),
        isCompleted: targetId.isCompleted,
        id: targetId.id
      })
  }

  return (
    <div>
        <ul className='list'>
          {list.map(item => (
            <li id={item.id} key={item.id} style={{textDecoration: item.isCompleted ? "line-through" : "none"}}> {item.content}
              <FontAwesomeIcon icon={faCheck} className="icon" id='check-icon' onClick={toggleCompleted}/>
              <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={updateToDo}/>
              <FontAwesomeIcon icon={faTrash} className="icon" onClick={deleteToDo}/>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default List