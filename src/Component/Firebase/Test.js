import firebase from "firebase/compat/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("dbXlHBPIi4Prgz6oeEcn")
  .collection("cartItems")
  .doc("");
firestore.doc("/users/dbXlHBPIi4Prgz6oeEcn/cartItems/pwJWeFgs4p8sJmP1dNKW");
