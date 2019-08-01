import React, { useEffect, useState } from 'react';
import app from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null);
	const db = app.firestore();

	useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			if (user) {
				var docRef = db.collection("users").doc(user.uid);

				docRef.get().then(function(doc) {
					if (doc.exists) {
						user.userInfo = doc.data();
						setCurrentUser(user);
					} else {
						alert("unable to read user information");
					}
				}).catch(function(error) {
					alert("Error getting user:", error);
				});
			}
		});
	}, []);

	return(
		<AuthContext.Provider value={{currentUser}}>
			{children}
		</AuthContext.Provider>
	);
};