import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoCaretBackOutline } from "react-icons/io5";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const auth = getAuth();
  const router = useRouter();
  const onInput = (event) => {
    let data = { [event.target.name]: event.target.value };
    setLoginData({ ...loginData, ...data });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, loginData.emailId, loginData.password)
      .then((res) => {
        localStorage.setItem("userEmail", res.user.email);
        toast.success("You are now Successfully Logged In..");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-sky-400 h-screen w-screen flex justify-center items-center ">
        <div className="shadow-xl w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-white p-5">
          <div className="w-56 mb-5">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="mb-3">
            <h1 className="text-2xl font-bold">Get&#39;s started</h1>
            <p>
              New to Recruitment?
              <Link href="/registration">
                <a className=" font-semibold text-sky-500">Join now</a>
              </Link>
            </p>
          </div>
          <div className="mt-2 mb-3">
            <input
              onChange={onInput}
              type="email"
              name="emailId"
              className="p-1 mb-5 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
              placeholder="Email Id"
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
              onClick={login}
            >
              Login
            </button>
          </div>

          {/* <button className="w-full mt-3 flex items-center justify-center border px-8 py-2 text-1xl hover:bg-slate-100">
          <FcGoogle className="mr-2 text-2xl" />
          Sign in with Google
        </button> */}
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
