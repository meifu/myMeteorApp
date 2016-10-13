import React, { Component } from 'react';
import Wow from 'wowjs';

import Section from './Section.jsx';

export default class App extends Component {
	componentDidMount() {
		new WOW({
			callback: function(box) {
				console.log('wow: ' + box);
			},
		}).init();
	}

	getText() {
		return [
			{_id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit commodo lacus. Morbi non lobortis dui.'},
			{_id: 2, text: 'Sed id nibh nec tortor dapibus dapibus. Ut at nisl nec urna molestie dignissim. Duis sodales nulla leo, sit amet tempor ante aliquam quis. Nam maximus urna a fermentum laoreet. Suspendisse accumsan vitae enim eget maximus.'},
			{_id: 3, text: 'In aliquam purus quis ex tempor, id pellentesque sem blandit. Ut porta ligula pharetra quam rhoncus fermentum eu non dolor. Integer non erat sed lorem dapibus facilisis.'},
			{_id: 4, text: 'Clas aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultrices massa ac efficitur fermentum. Fusce vel tempor nisi, et tempus dui.'},
		];
	}

	renderText() {
		return this.getText().map((section) => (
			<Section key={section._id} sectTxt={section} />		
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Meteor</h1>
				</header>

				<div className="mainContent">
					{this.renderText()}
				</div>
			</div>
		);
	}
}
