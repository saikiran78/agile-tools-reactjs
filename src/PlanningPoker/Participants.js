import React from 'react';

class Paticipants extends React.Component {

	render() {
		return (
			<div className="container card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Lakshmi Ramaseshan
						<span className="badge badge-primary badge-pill">Host</span>	
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Jay Warling
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Kris Aksdal
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Mila Mosqueira
						<span className="badge badge-primary badge-pill">C</span>	
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Saikiran Sheshagiri
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Arthi Shivakumar
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Tresa Harvey
						<span className="badge badge-primary badge-pill">C</span>	
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Ashish Mahajan
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Jorge Baeza
					</li>
				</ul>
			</div>
		)
	}
}

export default Paticipants;