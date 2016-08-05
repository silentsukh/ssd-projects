import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<header className="text-center">
				<h1 className="brand">Project</h1>
			</header>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('projectsComponent')
);
