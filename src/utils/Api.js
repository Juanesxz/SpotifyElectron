import firebaseApp from "./Firebase";
import firebase from "firebase/app";
const db = firebase.firestore(firebaseApp);

export async function isUserAdmin(uid) {
  const response = await db.collection("admins").doc(uid).get();
  console.log(response);
}
