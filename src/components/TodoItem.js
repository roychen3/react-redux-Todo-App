import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, markCompleteTodo } from '../actions/todosActions';
import { connect } from 'react-redux';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  delTodo = (id) => {
    this.props.deleteTodo(id);
  };

  // Toggle Complete
  markComplete = (id) => {
    this.props.markCompleteTodo(id);
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete.bind(this, id)} checked={completed} /> {' '}
          {title}
          <button onClick={this.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markCompleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default connect(null, { deleteTodo, markCompleteTodo })(TodoItem);