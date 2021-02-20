import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
	render() {
		return (
			<div>
				<div>BandsContainer</div>;
				<div>
					<BandInput addBand={this.props.addBand} bands={this.props.bands} />
				</div>
				<ul>
					{this.props.bands.map((band) => (
						<li key={band.name}>{band.name}</li>
					))}
				</ul>
			</div>
		);
	}
}

const mSTP = (state) => {
	return {
		bands: state.bands,
	};
};

const mDTP = (dispatch) => {
	return {
		addBand: (input) => dispatch({ type: "ADD_BAND", payload: input }),
	};
};
export default connect(mSTP, mDTP)(BandsContainer);
