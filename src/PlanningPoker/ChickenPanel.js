import React from 'react';

class ChickenPanel extends React.Component {
	render() {
		return(
			<div className="container card mb-3">
				<div className="card-body">
					<h5 className="card-title">Actions</h5>
					<h6 className="card-subtitle mb-2 text-muted">This is listen only mode</h6>
					<hr/>
					<p><i>You logged in listen only mode. Relax and watch the planning :)</i></p>
				</div>
			</div>
		);
	}
}

export default ChickenPanel;