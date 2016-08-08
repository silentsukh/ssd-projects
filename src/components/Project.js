import React, { PropTypes } from 'react';
import BackButton from '../containers/BackButton';

export default class Project extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let project = this.props.project;
		return (
			<div className="col-lg-12 page">
				<BackButton />
				<header className="text-center">
					<h1 className="brand">{project.name}</h1>
				</header>
				<p>{project.description}</p>
				<p><a href={project.url} target="_blank"><span className="glyphicon glyphicon-globe"></span> VISIT SITE</a></p>
				<div className="viewport">
					<iframe src={project.url} className={this.props.selectedViewport} />
				</div>
			</div>
		);
	}
}
Project.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		description: PropTypes.string,
		imageUrl: PropTypes.string,
		imageUrlx2: PropTypes.string,
		url: PropTypes.string
	}),
	selectedViewport: PropTypes.string
};