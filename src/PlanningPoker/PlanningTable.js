import React from 'react';

class PlanningTable extends React.Component {

	render() {
		return (
			<div className="container card">
				<div className="card-body">
					<h5 className="card-title">Topic</h5>
					<p className="card-text">
					This zone is the pointing table. When a scrum master selects the story/topic, then all the participants and the process of pointing will be shown here. Below notation of the cards (sample) tells us whether a participant is pointed or not.
					</p>
					<div className="row">
						<div className="col-sm-6">
							<p>Alex</p>
							<div className="notpointed-card">
							</div>
							<p><i>"Alex has pointed"</i></p>
						</div>
						<div className="col-sm-6">
							<p>Bob</p>
							<div className="pointed-card">
							</div>
							<p><i>"Bob has not yet pointed"</i></p>
						</div>
					</div>
					<hr />

					<p>Wait for scrum master to select the topic or story</p>
					<p>Once every participant joined the app, select a topic or story number and use the below form to send it to all participants</p>

					<div className="row">
						<div className="col-sm-2 participant-points">
							<p>Jay</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
						<div className="col-sm-2 participant-points">
							<p>Kris</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
						<div className="col-sm-2 participant-points">
							<p>Saikiran</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
						<div className="col-sm-2 participant-points">
							<p>Arthi</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
						<div className="col-sm-2 participant-points">
							<p>Ashish</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
						<div className="col-sm-2 participant-points">
							<p>Jorge</p>
							<div className="card">
								<span className="points">
									0
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PlanningTable;