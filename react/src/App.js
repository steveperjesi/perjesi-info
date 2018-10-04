import React, { Component } from 'react';
import { TopNav } from './TopNav';
import { Footer } from './Footer';
import './Base.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopNav />
				<Footer />
			</div>
		);
	}
}

export default App;
