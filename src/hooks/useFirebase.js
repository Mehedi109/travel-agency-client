import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const createNewUser = (email, password, name, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "",
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  useEffect(() => {
    fetch(`localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    admin,
    createNewUser,
    loginUser,
    logOut,
    isLoading,
    error,
  };
};

export default useFirebase;
