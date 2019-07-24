import React, {useContext} from 'react';
import {AuthContext} from './Auth';
import app from 'firebase';
import {Link} from 'react-router-dom';

const Home = () => {

	const {currentUser} = useContext(AuthContext);

	return (
		<div>
			<h3>Welcome {currentUser ? currentUser.email : ''}</h3>
			<button onClick={() => app.auth().signOut()}>Sign out</button>

			<br/>
			<br/>
			<div>Apps</div>
			<ul>
				<li>
					<Link to="/planning">Planning poker</Link>
				</li>
				<li>
					<Link to="/retro">Retro Board</Link>
				</li>
			</ul>		
		</div>
	)
}

export default Home;