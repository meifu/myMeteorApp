import React, { Component } from 'react';
import Wow from 'wowjs';
import Anime from 'animejs';

import Section from './Section.jsx';
import Header from './Header.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [],
			sectionPathAnimated: []
		};
	}


	componentDidMount() {
		var componentSelf = this;
		$.each(this.getSectionData(), function(idx, val) {
			console.log('aaa ' + val);
		});
		
		new WOW({
			callback: function(box) { 
				console.log('WOW cb: ' + box.innerHTML);
				var svgObj = box.parentNode.getElementsByClassName('centerPath');
				componentSelf.animatePath(svgObj);
			},
		}).init();
	}


	getSectionData() {
		return [
			{
				_id: 1, 
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit commodo lacus. Morbi non lobortis dui.',
				path_desktop: 'M300,0v300h-300v-300h300',
				path_mobile: ''
			},
			{
				_id: 2, 
				text: 'Sed ids nibh nec tortor dapibus dapibus. Ut at nisl nec urna molestie dignissim. Duis sodales nulla leo, sit amet tempor ante aliquam quis. Nam maximus urna fermentum laoreet. Suspendisse accumsan vitae enim eget maximus.',
				path_desktop: 'M10 290 L290 290 L150 10 Z',
				path_mobile: ''	
			},
			{
				_id: 3, 
				text: 'In aliquam purus quis ex tempor, id pellentesque sem blandit. Ut porta ligula pharetra quam rhoncus fermentum eu non dolor. Integer non erat sed lorem dapibus facilisis.',
				path_desktop: 'M2,150a148,148 0 1,0 296,0a148,148 0 1,0 -296,0',
				path_mobile: ''	
			},
			{
				_id: 4, 
				text: 'Clas aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultrices massa ac efficitur fermentum. Fusce vel tempor nisi, et tempus dui.',
				path_desktop: 'M300,150 225,280 75,280 0,150 75,20 225,20z',
				path_mobile: ''	
			},
		];
	}

	renderText() {
		return this.getSectionData().map((section) => (
			<Section key={section._id} sectTxt={section} />		
		));
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


	render() {
		return (
			<div className="container">
				<Header />

				<div className="mainContent">
					{this.renderText()}
				</div>
			</div>
		);
	}
}
