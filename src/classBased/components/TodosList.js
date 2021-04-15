import React from 'react';
import TodoItem from "./TodoItem"

class TodoList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.todos.map( todoObjs => (

            <TodoItem
              key={todoObjs.id}
              todoObjProps={todoObjs}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />

        ))}
      </ul>

    );
  }
}

export default TodoList;
