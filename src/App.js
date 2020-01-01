import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Header />
					<React.Fragment>
						<AddTodo />
						<Todos />
					</React.Fragment>
				</div>
			</div>
		);
	}
}

export default App;