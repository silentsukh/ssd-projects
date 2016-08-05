export const ActionTypes = {
	REQUEST_PROJECTS: 'REQUEST_PROJECTS',
	RECEIVE_PROJECTS_SUCCESS: 'RECEIVE_PROJECTS_SUCCESS',
	RECEIVE_PROJECTS_FAILURE, 'RECEIVE_PROJECTS_FAILURE',
	SELECT_PROJECT: 'SELECT_PROJECT',
	SELECT_VIEWPORT: 'SELECT_VIEWPORT'
};

export const ViewportTypes = {
	MOBILE: 'MOBILE',
	TABLET: 'TABLET',
	DESKTOP: 'DESKTOP'
};

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
		projects: projects
	};
}

export function receiveProjectsSuccess(error) {
	return {
		type: ActionTypes.RECEIVE_PROJECTS_SUCCESS,
		error: error
	};
}