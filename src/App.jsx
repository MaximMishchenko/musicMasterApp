import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

import './App.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			query: ''
		}
	}

	search() {
		console.log(this.state)

		const BASE_URL = 'https://api.spotify.com/v1/search?'
		const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1'
		const AUTH_KEY = 'BQCXC6oO1jNdL-mMj4il74crV-6-7Vn4iRdNtYI9NJc9tmZVriTJYUVGlZtVIy5WVZphSynlnS4NTqxvtGX7SP8YIMkCfVduhulSHzQDKzxw8QunzAP868a6HOu1Sc0XjRtVXEY'

		console.log(FETCH_URL)

		fetch(FETCH_URL, {
			method: 'GET',
			headers: {
		    	"Authorization": "Bearer " + AUTH_KEY
		    }
		})
		.then(res => res.json())
		.then(json => console.log(json))
	}

	render() {
		return(
			<div className="App">
				<div className="App-title">Music Master</div>

				<FormGroup>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Search for an artist"
							value={this.state.query}
							onChange={event => {this.setState({query: event.target.value})}}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									this.search()
								}
							}}
						/>
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>

				<div className="Profile">
					<div>Artist Picture</div>
					<div>Artist Name</div>
				</div>

				<div className="Gallery">
				 	Gallery
				</div>
			</div>
		)
	}
}

export default App