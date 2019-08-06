import React, { useEffect, useState } from 'react';
import app from './firebase';

export const AuthContext = React.createContext({
	currentUser: null,
	updateCurrentUser: () => {}
});



export const AuthProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null);
	const db = app.firestore();

	useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			if (user) {
				var docRef = db.collection("users").doc(user.uid);

				docRef.get().then(function(doc) {
					if (doc.exists) {
						let userInfo = doc.data();
						user.firstName = userInfo.firstname;
						user.lastName = userInfo.lastname;
						// user.email = userInfo.email;
						setCurrentUser(user);
					} else {
						alert("unable to read user information");
					}
				}).catch(function(error) {
					alert("Error getting user:", error);
				});
			}
		});
	});

	const updateCurrentUser = (user) => {
		setCurrentUser(user);
	}

	return(
		<AuthContext.Provider value={{currentUser: currentUser, updateCurrentUser: updateCurrentUser}}>
			{children}
		</AuthContext.Provider>
	);
};