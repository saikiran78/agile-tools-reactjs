import React from 'react';

class HostPanel extends React.Component {
	render() {
		return(
			<div className="container card mb-3">
				<div className="card-body">
					<h5 className="card-title">Scrum master</h5>
					<h6 className="card-subtitle mb-2 text-muted">Add the topics or user stories for the planning</h6>
					<hr/>
					<form>
						<div className="form-group row">
							<div className="col-sm-10">
								<input className="form-control" type="text" placeholder="Add a topic or user story for planning" />
							</div>
							<div className="col-sm-2">
								<button className="btn btn-primary">Add</button>
							</div>
						</div>
						
					</form>
					<ul className="list-group">
						<li className="list-group-item">
							<div className="row">
								<div className="col-sm-10">
									<p>US 1234: Create dashboard for admin</p>
									<ul className="nav">
										<li className="nav-item">
											<a className="nav-link disabled" href="/">Set topic</a>
										</li>
										<li className="nav-item">
											<a className="nav-link disabled" href="/">Reveal points</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/">Repoint</a>
										</li>
									</ul>
								</div>
								<div className="col-sm-2">
									<span className="btn btn-warning">20</span>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								<div className="col-sm-10">
									<p>US 1234: Create dashboard for admin</p>
								</div>
								<div className="col-sm-2">
									<span className="badge badge-primary badge-pill">In Progress</span>
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<ul className="nav">
									<li className="nav-item">
										<a className="nav-link" href="/">Set topic</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/">Reveal points</a>
									</li>
									<li className="nav-item">
										<a className="nav-link disabled" href="/">Repoint</a>
									</li>
								</ul>
								<div className="d-block">
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">1</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">2</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">3</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">5</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">8</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">13</button>
									<button className="btn btn-outline-warning btn-sm mr-1 mb-1">20</button>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								<div className="col-sm-10">
									<p>US 1234: Create dashboard for admin</p>
									<ul className="nav">
										<li className="nav-item">
											<a className="nav-link" href="/">Set topic</a>
										</li>
										<li className="nav-item">
											<a className="nav-link disabled" href="/">Reveal points</a>
										</li>
										<li className="nav-item">
											<a className="nav-link disabled" href="/">Repoint</a>
										</li>
									</ul>
								</div>
								<div className="col-sm-2">
									<span className="btn btn-warning">-</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default HostPanel;