import React, { Component } from 'react';
import Wow from 'wowjs';

import Section from './Section.jsx';

export default class App extends Component {
	componentDidMount() {
		
	}

	getText() {
		return [
			{
				_id: 1, 
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit commodo lacus. Morbi non lobortis dui.',
				path_desktop: 'M300,0v300h-300v-300h300',
				path_mobile: ''
			},
			{
				_id: 2, 
				text: 'Sed id nibh nec tortor dapibus dapibus. Ut at nisl nec urna molestie dignissim. Duis sodales nulla leo, sit amet tempor ante aliquam quis. Nam maximus urna fermentum laoreet. Suspendisse accumsan vitae enim eget maximus.',
				path_desktop: 'M0 300 L300 300 L150 0 Z',
				path_mobile: ''	
			},
			{
				_id: 3, 
				text: 'In aliquam purus quis ex tempor, id pellentesque sem blandit. Ut porta ligula pharetra quam rhoncus fermentum eu non dolor. Integer non erat sed lorem dapibus facilisis.',
				path_desktop: 'M0 32 C0 50 14 64 32 64 C50 64 64 50 64 32 C64 14 50 0 32 0 C14 0 0 14 0 32 Z',
				path_mobile: ''	
			},
			{
				_id: 4, 
				text: 'Clas aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ultrices massa ac efficitur fermentum. Fusce vel tempor nisi, et tempus dui.',
				path_desktop: '',
				path_mobile: ''	
			},
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
