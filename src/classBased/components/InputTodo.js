import React, {Component} from "react";

class InputTodo extends Component{
  state = {
    title : ""
  };

  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.title.trim()){                      /* trim() serve a validare l'imput assicurandosi che il campo non sia vuoto */
      this.props.addTodoProps(this.state.title);      /* trim() elimina gli spazi vuoti prima e dopo la stringa */
      this.setState({
        title: ""
      });
    }else{
      alert("Please write item");
    }
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo;
