import React, { Component, PropTypes } from 'react';
import Anime from 'animejs';

export default class Section extends Component {
	componentDidMount() {
		$('.sectionInner').width($(window).height()/2);
		Anime({
			targets: 'path',
			strokeDashoffset: function(el) {
				console.log('test: ' + el.getTotalLength());
				return [el.getTotalLength(), 0];
			},
			strokeDasharray: function(el) {
				return el.getTotalLength();
			},
			duration: 2000,
			easing: 'linear',
			elasticity: 0
		})
	}

	render () {
		return (
			<section>
				<div className="sectionInner">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600">
						<symbol id="sym01">
							<path d="M600,0V600H0V0H-600V-600H0V0H600Z" stroke="red" strokeWidth="5" strokeDasharray="0" className="centerPath" fill="none" />
						</symbol>
						<use xlink:href="#sym01" x="0" y="0" width="100%"/>	
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