import React from 'react';

class ParticipantPanel extends React.Component {
	render() {
		return(
			<div className="container card mb-3">
				<div className="card-body">
					<h5 className="card-title">Vote</h5>
					<h6 className="card-subtitle mb-2 text-muted">Use below deck to point the topic or user story</h6>
					<hr/>	
					<div className="row">
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								1
							</div>
						</div>
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								2
							</div>
						</div>
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								3
							</div>
						</div>
						<div className="card point-card bg-info text-white">
							<div className="card-body points text-center">
								5
							</div>
						</div>
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								8
							</div>
						</div>
						<div className="card point-card bg-info text-white">
							<div className="card-body points text-center">
								13
							</div>
						</div>
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								20
							</div>
						</div>
						<div className="card point-card bg-secondary text-white">
							<div className="card-body points text-center">
								?
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ParticipantPanel;