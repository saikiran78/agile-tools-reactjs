import React from 'react';

class PlanningTable extends React.Component {

	render() {
		return (
			<div className="container card mb-3">
				<div className="card-body">
					<h5 className="card-title">Topic</h5>
					<p className="card-text">
					This zone is the pointing table. When a scrum master selects the story/topic, then all the participants and the process of pointing will be shown here. Below notation of the cards (sample) tells us whether a participant is pointed or not.
					</p>
					<div className="row">
						<div className="col-sm-6">
							<p>Alex</p>
							<div className="card demo-card pointed">
							</div>
							<p><i>"Alex has pointed"</i></p>
						</div>
						<div className="col-sm-6">
							<p>Bob</p>
							<div className="card demo-card not-pointed">
							</div>
							<p><i>"Bob has not yet pointed"</i></p>
						</div>
					</div>
					<hr />
					<p>Wait for scrum master to select the topic or story</p>
					<p>Once every participant joined the app, select a topic or story number and use the below form to send it to all participants</p>
					<div className="row">
						
						<div className="card point-card pointed">
							<h5 className="card-title text-center">Jay</h5>
							<div className="card-body points text-center">
								20
							</div>
						</div>
						
						<div className="card point-card pointed">
							<h5 className="card-title text-center">Kris</h5>
							<div className="card-body points text-center">
								13
							</div>
						</div>
						
						<div className="card point-card not-pointed">
							<h5 className="card-title text-center">Saikiran</h5>
							<div className="card-body points text-center">
								0
							</div>
						</div>
						
						<div className="card point-card not-pointed">
							<h5 className="card-title text-center">Arthi</h5>
							<div className="card-body points text-center">
								0
							</div>
						</div>
						
						<div className="card point-card pointed">
							<h5 className="card-title text-center">Ashish</h5>
							<div className="card-body points text-center">
								8
							</div>
						</div>
						
						<div className="card point-card not-pointed">
							<h5 className="card-title text-center">Jorge</h5>
							<div className="card-body points text-center">
								5
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PlanningTable;