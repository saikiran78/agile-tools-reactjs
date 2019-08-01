import React from 'react';

class ParticipantPanel extends React.Component {
	render() {
		return(
			<div className="container card">
				<div className="card-body">
					<h5 className="card-title">Vote</h5>
					<h6 class="card-subtitle mb-2 text-muted">Use below deck to point the topic or user story</h6>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		);
	}
}

export default ParticipantPanel;