import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC3p07E51Em3bju37Uk6MCqRsQYBQqxdrg',
	authDomain: 'crwn-db-7bac4.firebaseapp.com',
	projectId: 'crwn-db-7bac4',
	storageBucket: 'crwn-db-7bac4.appspot.com',
	messagingSenderId: '566723405889',
	appId: '1:566723405889:web:cfbda0b8638554c1e23ec0',
	measurementId: 'G-ESM020VQTW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting user databsae and get data form datab base
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	//userRef Return a promise
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch {
			console.log('error message from snapshot');
		}
	}
	return userRef;

	// const { displayName, email } = userAuth;
	// const createdAt = new Date();
	// userRef
	// 	.set({
	// 		displayName,
	// 		email,
	// 		createdAt,
	// 		...addtionalData,
	// 	})
	// 	.catch((err) => console.log('error message:', err.message));
};

//For google authentiction utilies
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
