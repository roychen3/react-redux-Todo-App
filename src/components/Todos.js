import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getTodos } from '../actions/todosActions';

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  };

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

Todos.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos.items
})

export default connect(mapStateToProps, { getTodos })(Todos);