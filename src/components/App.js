import React, { PropTypes } from 'react';
import { fetchProjects } from '../actions';
import ProjectList from './ProjectList';
import Project from './Project';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchProjects());
	}
	componentDidUpdate() {
		$(window).scrollTop(0);
	}
	render() {
		console.log("app props", this.props);
		let project = {};
		let showProjectCssClass = '';
		if (this.props.selectedProject > 0) {
			project = this.props.projects.items.filter(p => p.id == this.props.selectedProject)[0];
			showProjectCssClass = 'showProject';
		}
		return (
			<div className="app">
				<div className={"pageContainer " + showProjectCssClass}>
					<ProjectList projects={this.props.projects.items} />
					<Project project={project} selectedViewport={this.props.selectedViewport.toLowerCase()} />
				</div>
			</div>
		);
	}
}
App.PropTypes = {
	projects: PropTypes.shape ({
		isFetching: PropTypes.bool.isRequired,
		items: PropTypes.array,
		error: PropTypes.object
	}),
	selectedProject: PropTypes.object,
	selectedViewport: PropTypes.string
}