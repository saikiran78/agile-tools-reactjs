import React from 'react';

class ParticipantPanel extends React.Component {
	render() {
		return(
			<div className="container card">
				<div className="card-body">
					<h5 className="card-title">Vote</h5>
					<h6 className="card-subtitle mb-2 text-muted">Use below deck to point the topic or user story</h6>
					<hr/>	
					<div className="row">
						<div className="col-sm-2">
							<div className="card">
								<p>1</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>2</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>3</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>5</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>8</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>13</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>20</p>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="card">
								<p>?</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ParticipantPanel;