import React, { Component, PropTypes } from 'react';
import Anime from 'animejs';

export default class Section extends Component {
	componentDidMount() {
		var componentSelf = this;
		$('.sectionInner').width($(window).height()/2);
		new WOW({
			callback: function(box) { 
				var svgObj = box.parentNode.getElementsByClassName('centerPath');
				console.log('wow: ' + box.parentNode.getElementsByClassName('centerPath').length);
				// for (var i = 0; i < box.parentNode.childNodes.length; i++) {
				// 	console.log('wow wow: ' + box.parentNode.childNodes[i].tagName);
				// 	if (box.parentNode.childNodes[i].tagName === 'svg') {
				// 		console.log('')
				// 	}
				// }
				componentSelf.animatePath(svgObj);
			},
		}).init();
		
	}

	animatePath (centerPath) {
		console.log('animatePath');
		Anime({
			targets: centerPath,
			strokeDashoffset: function(el) {
				console.log('test: ' + el.getTotalLength());
				return [el.getTotalLength(), 0];
			},
			duration: 4500,
			easing: 'linear',
			elasticity: 0
		})
	}

	render () {
		return (
			<section>
				<div className="sectionInner">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 300">
						<path d="M300,0v300h-300v-300h300" stroke="black" strokeWidth="20" strokeDasharray="1500" strokeDashoffset="1500" className="centerPath" fill="none" />
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