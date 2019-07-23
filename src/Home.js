import React, {useContext} from 'react';
import {AuthContext} from './Auth';
import app from 'firebase';

const Home = () => {

	const {currentUser} = useContext(AuthContext);

	return (
		<div>
			<h3>Welcome {currentUser ? currentUser.email : ''}</h3>
			<button onClick={() => app.auth().signOut()}>Sign out</button>
		</div>
	)
}

export default Home;