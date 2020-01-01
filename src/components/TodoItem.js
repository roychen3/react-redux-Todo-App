import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteTodo, markCompleteTodo } from '../actions/todosActions';
import { connect } from 'react-redux';

export class TodoItem extends Component {
  getStyle = () => {
    return {
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
      <div>
        <p style={this.getStyle()}>
          <input type="checkbox" onChange={this.markComplete.bind(this, id)} checked={completed} /> {' '}
          {title}
        </p>
        <button onClick={this.delTodo.bind(this, id)} >x</button>
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

export default connect(null, { deleteTodo, markCompleteTodo })(TodoItem);