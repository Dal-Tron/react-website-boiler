import * as firebase from "firebase/firebase";
import "firebase/database";
import config from "../config";

// https://firebase.google.com/docs/reference/js/
firebase.initializeApp(config.firebase.config);

const database = firebase.database();

export { firebase, database };
