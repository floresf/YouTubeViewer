import React, { Component } from 'react';

// ** function-based component **
// const SearchBar = () => {
// 	return <input />;
// };

// ** class-based component **
class SearchBar extends Component {
	// how to initialize state in a class-based component
	// ** function-based components do not have states **
	constructor(props) {
		super(props);

		this.state = { term: ''};
	} 
	
	render() {
		//return <input onChange={this.onInputChange} />;

		// can drop parenths around event too --- event =>
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);

	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// could also name.. 'handleInputChange(event)...'
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}


export default SearchBar;