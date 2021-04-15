import React from 'react';
import TodoItem from "./TodoItem"

const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map( todoObjs => (

          <TodoItem
            key={todoObjs.id}
            todoObjProps={todoObjs}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />

      ))}
    </ul>

  );
}

export default TodoList;
