import React, { PropTypes } from 'react';
import ProjectThumbContainer from '../containers/ProjectThumbContainer';

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("proj list", this.props.projects);
		let projects = this.props.projects.map( function(project) {
			return (<ProjectThumbContainer key={project.id} project={project} />);
		});
		return (
			<div className="page">
				<header className="text-center">
					<h1 className="brand">Portfolio</h1>
				</header>
				<section className="featured-section">
					{projects}
				</section>
			</div>
		);
	}
}
ProjectList.propTypes = {
	projects: PropTypes.array.isRequired
};