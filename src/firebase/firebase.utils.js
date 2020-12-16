import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBES830Bdzo0KGfrSsM3--q-XnU3xq7WIQ",
  authDomain: "crwn-db-4d6ea.firebaseapp.com",
  databaseURL: "https://crwn-db-4d6ea.firebaseio.com",
  projectId: "crwn-db-4d6ea",
  storageBucket: "crwn-db-4d6ea.appspot.com",
  messagingSenderId: "519538115134",
  appId: "1:519538115134:web:d0927d0b61c27e2f45876f",
  measurementId: "G-H0KYCVLHLF",
};

firebase.initializeApp(config);

// taking userAuth object from authentication, creating profile document and storing inside db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // when signIn will return userAuth object, signOut return null
  if (!userAuth) return; // user doesnt exist -> user signedOut -> do nothing

  //? otherwise:
  //? 1] check if user already exist in db

  // DocumentRefference object
  // getting user refference from location: users/userId
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('userRef', userRef)

  // and taking snapshot of that refference
  // DocumentSnapshot object - snapshot of object in database
  const snapShot = await userRef.get();
  // console.log('snapShot', snapShot)

  // DocumentSnapshot has several props, exists: bolen (true/false)
  // if snapshot.exists is false meaning object under userAuth.uid doesn't exist in db -> we create new object from userAuth

  //? 2] if user dont exist create new user object and save to db
  if (!snapShot.exists) {
    // destructure data from userAuth
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    // store data to db
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(userRef)

  //? 3] return user object
  return userRef;
};

// adding shop data to firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(
    doc => {
      const {title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  );
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator;
  }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// signin via google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
