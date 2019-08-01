import React from 'react';
import {AuthContext} from './../Auth';
import app from './../firebase';
import Button from 'react-bootstrap/Button';
import PlanningTable from './PlanningTable'
import Participants from './Participants';
import HostPanel from './HostPanel';
import ParticipantPanel from './ParticipantPanel';

class PlanningPokerHome extends React.Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);

		this.state = {
			currentMeeting: {

			}
		}

		this.handleExitMeeting = this.handleExitMeeting.bind(this);
	}

	componentWillMount() {
		//const {currentUser} = this.context;
		const { match: { params } } = this.props;
		const db = app.firestore();
		db.collection("planning").doc(params.planningId)
			.onSnapshot((querySnapshot) => {
				
				this.setState({currentMeeting: querySnapshot.data()});
				console.log(this.state);
			});
	}

	handleExitMeeting() {
		alert("exiting planning");
	}

	render() {
		return (
			<div className="container planning-poker">
				
				<div className="row">
					<div className="col-sm-10">
					<h4>Planning poker</h4>
					{this.state.currentMeeting.team} - {this.state.currentMeeting.title}
					{' { '}<span className="text-muted">Access code: {this.state.currentMeeting.accessCode}</span>{' } '}
					</div>
					<div className="col-sm-2"><Button variant="danger float-right" onClick={this.handleExitMeeting}>Exit Planning</Button></div>
				</div>			
				<hr />
				<div className="row">
					<div className="col-sm-8">
						<PlanningTable></PlanningTable>
						<HostPanel></HostPanel>
						<ParticipantPanel></ParticipantPanel>
					</div>
					<div className="col-sm-4">
						<Participants></Participants>
					</div>
				</div>
			</div>
		)
	}
	
}

export default PlanningPokerHome;