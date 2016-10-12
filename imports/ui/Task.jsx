import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
	render () {
		return (
			<section>
				<div className="sectionInner">
					<svg id="layer_1" data-name="layer1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><style>.cls-1{fill:#fff;}</style></defs><title>工作區域 1</title><rect class="cls-1" x="0.5" y="0.5" width="599" height="599"/><path d="M599,1V599H1V1H599m1-1H0V600H600V0Z"/></svg>
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