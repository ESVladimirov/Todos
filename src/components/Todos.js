import React from 'react';
import Todo from './Todo';

export default class Todos extends React.Component {
    constructor(props){
      super(props);
      this.props = props;
      let todos = props.todos ? props.todos : [];
      this.placeholders = ['Помыть кота', 'Покормить посуду', 'Вынести мусор', 'Отдохнуть', 'Поспать', 'Просунться', 'Придумать placeholder'];
      this.state = {
        todos,
        inputValue: '',
      }
      
      this.deleteTodo = this.deleteTodo.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateTodos = this.updateTodos.bind(this);
    }

    deleteTodo(todoId) {
      let updatedTodos = this.state.todos.filter((todo) => todo.id !== todoId);
      this.setState({
        todos: updatedTodos
      });
      this.props.updateTodosInLocalStorage(updatedTodos);
    }

    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      if (!this.state.inputValue) {
        return;
      }
      
      let convertedString = this.state.inputValue[0].toString().toUpperCase() + this.state.inputValue.substring(1).toLowerCase();
      let updatedTodos = this.state.todos;
      updatedTodos.push({
        id: Date.now(),
        name: convertedString,
        done: false
      })

      this.setState({
        todos: updatedTodos,
        inputValue: ''
      });

      this.props.updateTodosInLocalStorage(this.state.todos);
    }

    updateTodos(updatedTodo) {
      let updatedTodos = this.state.todos.map((todo) =>  {
        if (todo.id === updatedTodo.id) {
          todo.done = updatedTodo.done;
        }
        return todo;
      });
      this.setState({
        todos: updatedTodos
      });
      this.props.updateTodosInLocalStorage(updatedTodos);
    }

    render() {
      let convertedTodos = this.state.todos.map((todo) => 
        <Todo key={todo.id.toString()} name={todo.name} done={todo.done} todoId={todo.id} deleteTodo={this.deleteTodo} updateTodos={this.updateTodos}/>
      )
      
      return (
        <div>
          <ul className="Todos">
            {convertedTodos}
          </ul>

          <form onSubmit={this.handleSubmit}>
            <input type="text" className="addTodoInput" value={this.state.inputValue} onChange={this.handleChange} placeholder={this.placeholders[Math.floor(Math.random() * this.placeholders.length)]}/> 
            <button className="addTodo" type="submit">+</button>
          </form>
        </div>
        
      );
    }
    
  }