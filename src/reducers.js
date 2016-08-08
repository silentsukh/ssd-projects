import { combineReducers } from 'redux';
import { ActionTypes, ViewportTypes } from './constants';



/*
EXAMPLE STATE

state = {
	isFetching: false,
	selectedProject: 3,
	items: [
		{
			id: 3,
			name: 'Twatter',
			description: 'A twitter clone using React',
			imageUrl: '...',
			imageUrlx2: '...',
			url: '...'
		},
		{...},
		{...},
		{...}
	],
	error: {}
}
*/

function selectedProject(state = -1, action) {
	switch (action.type) {
		case ActionTypes.SELECT_PROJECT:
			return action.id;
		default:
			return state;
	}
}

function selectedViewport(state = ViewportTypes.MOBILE, action) {
	switch (action.type) {
		case ActionTypes.SELECT_VIEWPORT:
			return action.viewportType;
		default:
			return state;
	}
}

function projects(state = { isFetching: false, items: [], error: {} }, action) {
	switch(action.type) {
		case ActionTypes.REQUEST_PROJECTS:
			return { ...state, isFetching: true };
		case ActionTypes.RECEIVE_PROJECTS_SUCCESS:
			return { ...state, isFetching: false, items: action.projects };
		case ActionTypes.RECEIVE_PROJECTS_FAILURE:
			return { ...state, isFetching: false, error: action.error };
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	projects,
	selectedViewport,
	selectedProject
});

export default rootReducer;