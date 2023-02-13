import { useState } from "react";
import { firebase, db } from "./config";

export default UserData = () => {
  const [data, setData] = useState("");
  const email = firebase.auth().currentUser.email;
  db.collection("users")
    .doc(email)
    .get()
    .then((snap) => {
      const data = snap.data();
      setData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return [data];
};
