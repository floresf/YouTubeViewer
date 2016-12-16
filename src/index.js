import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCOH9xdmS73p1JMd8cz1PyxLaIl2Qvw2e8';

// Create a new component. This component should produce
// some HTML
// this is a class not an instance..
// const App = function() {
// 	return <div>Hi!</div>;
// }

// ** function version
// const App = () => {
// 	return <div>
// 		<SearchBar />
// 	</div>;
// }

// redefing as class so we can use state
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');


	}

	videoSearch(term) {

		// using the callback function to add the data to the state
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
			videos: videos,
			selectedVideo: videos[0]
		}); 
			// this.setState({videos: videos});
			// ^ only works when key and name are the same values
		});

	}

	render() {
		return (
			<div>
			<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));