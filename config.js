import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyAvJuu1W4Txca3XYhEoYowBgFl_LXO81lI",
	authDomain: "spectagram-3bf2b.firebaseapp.com",
	projectId: "spectagram-3bf2b",
	storageBucket: "spectagram-3bf2b.appspot.com",
	messagingSenderId: "823739128056",
	appId: "1:823739128056:web:24215c2977a7fe405c430d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
