import React, { Component, PropTypes } from 'react';
import Anime from 'animejs';

export default class Section extends Component {

	componentDidMount() {
		var componentSelf = this;		
		
	}

	render () {
		return (
			<section>
				<div className="sectionInner">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 300">
						<path d={this.props.sectTxt.path_desktop} stroke="black" strokeWidth="3" strokeDasharray="1500" strokeDashoffset="1500" strokeMiterlimit="10" strokeLinecap="square" className="centerPath" fill="none" />
						<text></text>
					</svg>
					<p className="wow fadeInUp" data-wow-offset="200">{this.props.sectTxt.text}</p>
				</div>
			</section>
		)
	}
}

Section.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	sectTxt: PropTypes.object.isRequired,
}