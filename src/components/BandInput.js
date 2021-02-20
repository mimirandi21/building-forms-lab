// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let band = this.state;
		this.props.addBand(band);
		this.setState({
			name: "",
		});
	};
	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};

	render() {
		return (
			<div>
				<div>Add a Band</div>
				<form onSubmit={this.handleSubmit}>
					<label>Band Name</label>
					<div>
						<input
							type="text"
							name="name"
							onChange={this.handleChange}
							value={this.state.name}
						></input>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default BandInput;
