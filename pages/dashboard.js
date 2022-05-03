import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  where,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { app, database } from "../firebaseConfig";
import { RiLogoutCircleLine } from "react-icons/ri";
export default function Dashboard() {
  //   const userEmail = sessionStorage.getItem("userEmail", userEmail);
  const collectionRef = collection(database, "userPassword");
  const userEmailId = sessionStorage.getItem("userEmail");
  const emailQuery = query(collectionRef, where("email", "==", userEmailId));
  const [passwordsArray, setpasswordsArray] = useState([]);
  const auth = getAuth();
  const router = useRouter();
  const getPassword = async () => {
    onSnapshot(emailQuery, (response) => {
      setpasswordsArray(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  const logout = () => {
    signOut(auth).then(() => {
      router.push("/login");
      localStorage.removeItem("userEmail");
      sessionStorage.clear();
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response) {
        getPassword();
      } else {
        navigate("/login");
      }
    });
  }, []);
  console.log(passwordsArray);
  return (
    <div className="bg-sky-400 h-screen w-screen flex justify-center items-center ">
      <div className="p-5 relative shadow-xl w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-white">
        {passwordsArray.map((password) => {
          return (
            // <div className="password-data" key={password.id}>
            //   <p>{password.email}</p>
            //   <p>{password.fullName}</p>
            //   <p>{password.phoneNumber}</p>
            //   <p>{password.password}</p>
            // </div>
            <>
              <div className="profile_content">
                <div className="group mt-2">
                  <label>Name</label>
                  <h4 className="text-xl capitalize">{password.fullName}</h4>
                </div>
                <div className="group mt-2">
                  <label>Email</label>
                  <h4 className="text-xl">{password.email}</h4>
                </div>
                <div className="group mt-2">
                  <label>Email</label>
                  <h4 className="text-xl">{password.phoneNumber}</h4>
                </div>
              </div>
            </>
          );
        })}
        <button
          onClick={logout}
          className="mt-2 absolute bottom-2 right-5 flex justify-center items-center border cursor-pointer p-2 rounded-3xl hover:bg-sky-500 hover:text-white"
        >
          <RiLogoutCircleLine />
        </button>
      </div>
    </div>
  );
}
