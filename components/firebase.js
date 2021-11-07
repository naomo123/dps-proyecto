
import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNKnVgPip8LlZQqYgrcdS9CFN37SpcZzE",
    authDomain: "dps-projecto.firebaseapp.com",
    projectId: "dps-projecto",
    storageBucket: "dps-projecto.appspot.com",
    messagingSenderId: "1002056235295",
    appId: "1:1002056235295:web:bc62e96d4ac735e21a182a",
    measurementId: "G-25X4P0RG9E"
};

let app;

if(firebase.apps.length ===0){

  app=firebase.initializeApp(firebaseConfig);
} else {
  app=firebase.app()
}
const provider = new firebase.auth.GoogleAuthProvider();

const  auth=firebase.auth();

firebase.firestore(); 

const settings = { timestampsInSnapshots : true , } ;
   
  

export {auth, provider,};
export default firebase;  
