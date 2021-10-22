import firebaseApp from "./Firebase";
import firebase from "firebase/app";
const db = firebase.firestore(firebaseApp);

export async function isUserAdmin(uid) {
  const response = await db.collection("admin").doc(uid).get();
  return response.exists;
}

export const reauthenticate = (password) => {
  const user = firebase.auth().currentUser;

  const credentials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  );
  return user.reauthenticateWithCredential(credentials);
};
