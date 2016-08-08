import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions';

let BackButton = ({ dispatch }) => {
	return (
		<a href="#" onClick={ e=> {
				e.preventDefault();
				dispatch(selectProject(-1));
			}
		}><span className="glyphicon glyphicon-chevron-left"></span> BACK</a>
	);
};

BackButton = connect()(BackButton);

export default BackButton;