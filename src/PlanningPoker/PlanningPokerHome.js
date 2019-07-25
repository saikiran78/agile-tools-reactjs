import React, {useContext} from 'react';
import {AuthContext} from './../Auth';

const PlanningPokerHome = () => {
	const {currentUser} = useContext(AuthContext);
	return (
		<div>
			Planning poker app - home {currentUser.email}
		</div>
	)
}

export default PlanningPokerHome;