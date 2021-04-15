import React, {useState} from "react";
import {ImPlus} from 'react-icons/im';

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(title.trim()){
      props.addTodoProps(title);
      setTitle("");
    }else{
      alert("Please write item");
    }
  }

  return <form onSubmit={handleSubmit} className="form-container">
    <input
      className = "input-text"
      onChange={onChange}
      type="text"
      value={title}
      name="title"
      placeholder="Add todo.."
    />
    <button className="input-submit"><ImPlus style={{ color: "#2D882D", fontSize: "20px", marginTop: "2px" }}/></button>
  </form>
};

export default InputTodo;
