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

//For google authentiction utilies
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
