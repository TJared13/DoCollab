import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCLu7s846pgck6hzL24Iv8Sv_87L3-zUUA',
	authDomain: 'docollab.firebaseapp.com',
	projectId: 'docollab',
	storageBucket: 'docollab.appspot.com',
	messagingSenderId: '287319952664',
	appId: '1:287319952664:web:f2e29d95bfd0dd741ae26d'
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export { db };
