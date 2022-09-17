import './App.css';
import Input from './Components/Input';
import List from './Components/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faToggleOff} from "@fortawesome/free-solid-svg-icons"

function App() {


  if (!localStorage.getItem("username")) {
    let username = ""
    while(!username){
      username = prompt("What is your username?")
    }
    localStorage.setItem("username", username)
  }


  return (
    <div>
      <FontAwesomeIcon icon={faToggleOff} id="toggle"/>
      <h1>Welcome, {localStorage.getItem("username")}</h1>
      <Input/>
      <List/>
    </div>
  );
}

export default App;
