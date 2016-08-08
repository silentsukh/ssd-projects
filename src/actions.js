import { ActionTypes } from './constants';
import fetch from 'isomorphic-fetch';

export function selectProject(id) {
	return {
		type: ActionTypes.SELECT_PROJECT,
		id
	};
}

export function selectViewport(viewportType) {
	return {
		type: ActionTypes.SELECT_VIEWPORT,
		viewportType
	};
}

export function requestProjects() {
	return {
		type: ActionTypes.REQUEST_PROJECTS
	};
}

export function receiveProjectsSuccess(projects) {
	return {
		type: ActionTypes.RECEIVE_PROJECTS_SUCCESS,
		projects
	};
}

export function receiveProjectsFailure(error) {
	return {
		type: ActionTypes.RECEIVE_PROJECTS_FAILURE,
		error
	};
}

// Async action
export function fetchProjects() {

	return dispatch => {
		dispatch(requestProjects());
		return fetch('projects.json')
			.then(response => response.json())
			.then(json => dispatch(receiveProjectsSuccess(json)),
				error => dispatch(receiveProjectsFailure(error)));
	};
}