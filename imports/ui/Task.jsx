import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
	render () {
		return (
			<section>
				<div className="sectionInner">
					<p className="wow fadeInUp" data-wow-offset="200">{this.props.task.text}</p>
				</div>
			</section>
		)
	}
}

Task.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	task: PropTypes.object.isRequired,
}