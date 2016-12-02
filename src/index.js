import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCOH9xdmS73p1JMd8cz1PyxLaIl2Qvw2e8';

// Create a new component. This component should produce
// some HTML
// this is a class not an instance..
// const App = function() {
// 	return <div>Hi!</div>;
// }

const App = () => {
	return <div>
		<SearchBar />
	</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));