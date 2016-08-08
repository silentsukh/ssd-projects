import { connect } from 'react-redux';
import ProjectThumb from '../components/ProjectThumb';
import { selectProject } from '../actions';

function mapStateToProps(state) {
	console.log("pt state", state);
	return state;
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onClick: () => {
			dispatch(selectProject(ownProps.project.id));
		}
	}
}

const ProjectThumbContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectThumb);
export default ProjectThumbContainer;