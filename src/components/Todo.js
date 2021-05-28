import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = {
          done: props.done,
      }
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      let done = !this.state.done;
      this.setState ({
        done,
      })
      this.props.updateTodos({
        id: this.props.todoId,
        done
      });
    }
  
    render() {
        let label;
        if (this.state.done) {
            label = (
                <div className="Todo" >
                    <label className='checked label'>
                        <input className='checkbox' type="checkbox" defaultChecked onClick={this.handleClick}/>
                        <span className='fake-checkbox'></span>
                        <span className='fake-checkbox-text'>{this.props.name}</span>
                    </label>
                    <button className="deleteTodo" onClick={() => {this.props.deleteTodo(this.props.todoId)}}>&times;</button>
                </div>
                
            );
        } else {
            label = (
                <div className="Todo" >
                    <label className='label'>
                        <input className='checkbox' type="checkbox" onClick={this.handleClick}/>
                        <span className='fake-checkbox'></span>
                        <span className='fake-checkbox-text'>{this.props.name}</span>
                    </label>
                    <button className="deleteTodo" onClick={() => {this.props.deleteTodo(this.props.todoId)}}>&times;</button>
                </div>
                
            );
        }

        return (
            <li>
                {label}
            </li>
        );
    }
  }