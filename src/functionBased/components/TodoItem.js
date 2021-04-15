import React, {useState, useEffect} from 'react';
//stylesheet
import styles from "./TodoItem.module.css"
//svg icons
import {ImBin} from 'react-icons/im';


const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = event => {
    if(event.key === "Enter" ){
      setEditing(false);
    }
  }

 useEffect( () => {
   return () => {
     console.log("effect unmount");
   }
 }, []);


  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {id, title, completed} = props.todoObjProps;  //destructuring

  let viewMode = {};
  let editMode = {};

  if(editing){
    viewMode.display = "none";
  }else{
    editMode.display = "none";
  }

  return(
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <ImBin style={{ color: "#AA3939", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem;
