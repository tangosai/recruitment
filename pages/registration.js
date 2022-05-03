import Link from "next/link";
import React, { useState } from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, database } from "../firebaseConfig";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Registration() {
  const [registerData, setRegisterData] = useState({});
  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value };
    setRegisterData({ ...registerData, ...data });
  };
  const collectionRef = collection(database, "userPassword");
  const auth = getAuth();
  const router = useRouter();
  const register = () => {
    createUserWithEmailAndPassword(
      auth,
      registerData.emailId,
      registerData.password
    )
      .then(() => {
        addDoc(collectionRef, {
          email: registerData.emailId,
          password: registerData.password,
          fullName: registerData.fullName,
          phoneNumber: registerData.phoneNumber,
        })
          .then(() => {
            toast.success("Your are now Successfull Registered..");
            setTimeout(() => {
              router.push("/login");
            }, 1000);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-sky-400 h-screen w-screen flex justify-center items-center ">
        <div className="shadow-xl w-10/12 sm:w-8/12 md:w-4/12 lg:w-3/12 bg-white p-5">
          <div className="w-56 mb-5">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Get&#39;s started</h1>
            <p>
              Already have an account ?{" "}
              <Link href="/login">
                <a className="font-semibold text-sky-500">Login now</a>
              </Link>
            </p>
          </div>
          <div className="mt-2 mb-3">
            <input
              className="p-1 mb-5 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
              placeholder="Full Name"
              onChange={onInput}
              type="text"
              name="fullName"
            />
            <input
              onChange={onInput}
              type="email"
              name="emailId"
              className="p-1 mb-5 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
              placeholder="Email Id"
            />
            <input
              onChange={onInput}
              type="number"
              name="phoneNumber"
              className="p-1 mb-5 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
              placeholder="Mobile Number"
            />
            <input
              onChange={onInput}
              type="password"
              name="password"
              className="p-1 mb-5 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
              placeholder="Password"
            />
            <button
              className="bg-sky-500 px-8 py-1 cursor-pointer h-10 text-white font-semibold w-full hover:bg-sky-600"
              onClick={register}
            >
              Register
            </button>
          </div>
          <Link href="/">
            <a className="mt-3 flex justify-center items-center border px-8 py-1 cursor-pointer h-10  w-full hover:bg-sky-100">
              <IoCaretBackOutline className="mx-1" />
              Go To Homepage
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
