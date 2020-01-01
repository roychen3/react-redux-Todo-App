import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Header />
				<div className='container'>
					<React.Fragment>
						<AddTodo />
						<Todos />
					</React.Fragment>
				</div>
			</Provider>
		);
	}
}

export default App;