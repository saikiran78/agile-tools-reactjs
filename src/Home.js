import React, {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [validated, setValidated] = useState(false);

	const handleCreateMeeting = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);


	}

	return (
		<div className="container home">
			<Button variant="success" onClick={handleShow}>Start a new meeting</Button>
			<hr/>
			<h4>Recent meetings</h4>
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Team</th>
						<th>Meeting Type</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Sprint 42</td>
						<td>SkyNet</td>
						<td>Planning</td>
						<td>June 30, 2019</td>
					</tr>
					<tr>
						<td>Sprint 41</td>
						<td>Insco</td>
						<td>Planning</td>
						<td>June 12, 2019</td>
					</tr>
					<tr>
						<td>Sprint 41</td>
						<td>SkyNet</td>
						<td>Retro</td>
						<td>May 29, 2019</td>
					</tr>
					<tr>
						<td>Sprint 40</td>
						<td>Incredibles</td>
						<td>Planning</td>
						<td>May 28, 2019</td>
					</tr>
					<tr>
						<td>Sprint 39</td>
						<td>Avengers</td>
						<td>Retro</td>
						<td>May 12, 2019</td>
					</tr>
				</tbody>
			</table>
			<Modal size="lg" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
				<Modal.Title>Create a new meeting</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate validated={validated} onSubmit={handleCreateMeeting}>
						<Form.Group as={Row} controlId="validateMeetingName">
							<Form.Label column sm="3">Title</Form.Label>
							<Col sm="9">
								<Form.Control
									required
									type="text"
									placeholder="Enter meeting name"
									defaultValue=""
								></Form.Control>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="3">Team</Form.Label>
							<Col sm="9">
								<Form.Control
									required
									type="text"
									placeholder="Enter Team name"
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
									placeholder="Enter an access code"
								></Form.Control>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="3">
								Meeting Type
							</Form.Label>
							<Col sm="9">
								<Form.Control as="select">
									<option>Planning Poker</option>
									<option>Retro meeting</option>
								</Form.Control>
							</Col>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleCreateMeeting}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}


export default Home;