import React, { PropTypes } from 'react';

export default class ProjectThumb extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = (e) => this._onClick(e);
	}
	_onClick(e) {
		this.props.onClick();
	}
	render() {
		let project = this.props.project;
		let divStyle = {
			backgroundImage: 'url(' + project.imageUrl + ')'
		};
		return (
				<div className="col-sm-6 col-md-4">
					<div className="panel panel-default" onClick={this.onClick}>
					  <div className="panel-body">
						<div className="project-thumb" style={divStyle} data-rjs={project.imageUrlx2}></div>
					    <h3>{project.name}</h3>
					    <p>{project.description.length > 63 ? project.description.substring(0, 60) + "..." : project.description}</p>
					  </div>
					</div>
				</div>
		);
	}
}
ProjectThumb.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		imageUrlx2: PropTypes.string.isRequired,
		url: PropTypes.string
	}),
	onClick: PropTypes.func.isRequired
};