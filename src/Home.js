import React from 'react';
import {Link} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import app from './firebase';
import {AuthContext} from './Auth';
import * as firebase from 'firebase';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			validated: false,
			fields: {
				title: "",
				team: "",
				accessCode: "",
				meetingType: "planning"
			},
			recentMeetings: []
		}

		this.handleCreateMeeting = this.handleCreateMeeting.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	static contextType = AuthContext;

	handleClose = () => {
		this.setState({
			show: false
		})
	};
	handleShow = () => {
		this.setState({
			show: true
		})
	};

	setValidated = (to) => {
		this.setState({validated: to});
	}

	handleInputChange = (event) => {
		const fields = this.state.fields;
		fields[event.target.name] = event.target.value;
		this.setState({fields});
	}

	handleCreateMeeting = event => {
		
		this.setValidated(true);

		if (this.state.fields.title === "" || this.state.fields.team === "" || this.state.fields.accessCode === "") {
			return;
		} else {
			const {currentUser} = this.context;
			const db = app.firestore();
			const history = this.props.history;
			db.collection("planning").add({
				title: this.state.fields.title,
				team: this.state.fields.team,
				accessCode: this.state.fields.accessCode,
				hostId: currentUser.uid,
				meetingType: this.state.fields.meetingType,
				createDate: firebase.firestore.Timestamp.now(),
				participants: firebase.firestore.FieldValue.arrayUnion(
					{
						firstName: currentUser.userInfo.firstname,
						lastName: currentUser.userInfo.lastname,
						isActive: true,
						isChicken: false,
						isHost: true,
						uid: currentUser.uid
					}
				)
			})
			.then((documentRef) => {
				this.setState({
					show: false
				});

				this.state.fields.meetingType === "planning"
				? history.push("/planning/" + documentRef.id)
				: history.push("/retro/" + documentRef.id)
			})
			.catch((error) => {
				alert("error creating meeting information:" + error);
			});
		}

	}

	getMeetingType(meetingType) {
		let displayName;
		switch(meetingType) {
			case 'planning':
				displayName = 'Planning';
				break;
			case 'retro': 
				displayName = 'Retrospect';
				break;
			default:
				displayName = 'Planning';
		}
		return displayName;
	}

	componentDidMount() {
		const {currentUser} = this.context;
		if(currentUser.uid) {
			const db = app.firestore();
			db.collection("planning").where("hostId", "==", currentUser.uid)
				.onSnapshot((querySnapshot) => {
					let recentMeetings = [];
					querySnapshot.forEach(function(doc) {
						recentMeetings.push(doc);
					})
					this.setState({recentMeetings});
				});
		}
	}

	render() {
		const {currentUser} = this.context;
		return (
			currentUser.uid 
			?
			<div className="container home">
				<Button variant="success" onClick={this.handleShow}>Start a new meeting</Button>
				<hr/>
				<h4>Recent meetings</h4>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Title</th>
							<th>Team</th>
							<th>Meeting Type</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{
							!this.state.recentMeetings.length
							?
							<tr>
								<td colSpan="4">No meeting available</td>
							</tr>
							:
							this.state.recentMeetings.length
							&&
							this.state.recentMeetings.map((meeting) => {

								let docData = meeting.data();
								return(<tr key={meeting.id}>
									<td>
										<Link to={{
											pathname: `/planning/${meeting.id}`,
											state: {
												from: this.props.location
											}
										}}>{docData.title}</Link></td>
									<td>{docData.team}</td>
									<td>{this.getMeetingType(docData.meetingType)}</td>
									<td>{docData.createDate.toDate().toDateString()} {docData.createDate.toDate().toLocaleTimeString()}</td>
								</tr>)
							})
						}
						
					</tbody>
				</table>
				<Modal size="lg" show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
					<Modal.Title>Create a new meeting</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form noValidate validated={this.state.validated} onSubmit={this.handleCreateMeeting}>
							<Form.Group as={Row} controlId="validateMeetingName">
								<Form.Label column sm="3">Title</Form.Label>
								<Col sm="9">
									<Form.Control
										required
										type="text"
										name="title"
										placeholder="Enter meeting name"
										value={this.state.fields.title}
										onChange={this.handleInputChange}
									></Form.Control>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">Team</Form.Label>
								<Col sm="9">
									<Form.Control
										required
										type="text"
										name="team"
										placeholder="Enter Team name"
										value={this.state.fields.team}
										onChange={this.handleInputChange}
									></Form.Control>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									Access Code
								</Form.Label>
								<Col sm="9">
									<Form.Control
										required
										type="text"
										name="accessCode"
										placeholder="Enter an access code"
										value={this.state.fields.accessCode}
										onChange={this.handleInputChange}
									></Form.Control>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									Meeting Type
								</Form.Label>
								<Col sm="9">
									<Form.Control as="select" 
											name="meetingType"
											value={this.state.fields.meetingType} 
											onChange={this.handleInputChange}>
										<option value="planning">Planning Poker</option>
										<option value="retro">Retro meeting</option>
									</Form.Control>
								</Col>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleCreateMeeting}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			:
			null
		)
	}
}


export default Home;