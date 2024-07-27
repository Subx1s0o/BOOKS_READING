"use client";
import { auth } from "@/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { MouseEvent } from "react";
import GoogleIcon from "../../public/icons/google.svg";
export default function RegisterForm() {
  const handleGoogle = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  return (
    <div className="auth-back w-full h-full px-5 pt-32 pb-11 flex flex-col items-center ">
      <button
        onClick={handleGoogle}
        className="relative  bg-white cursor-pointer px-12 py-4 inline font-bold text-gray-500 font-roboto "
      >
        <span className="absolute left-4">
          <GoogleIcon />
        </span>
        Sign-in with Google
      </button>

      <form className="flex flex-col w-full">
        <label className="flex flex-col" htmlFor="name">
          Name*
          <input type="text" name="name" id="name" />
        </label>
        <label className="flex flex-col" htmlFor="email">
          Email*
          <input type="text" name="email" id="email" />
        </label>
        <label className="flex flex-col" htmlFor="password">
          Password*
          <input type="password" name="password" id="password" />
        </label>
        <label className="flex flex-col" htmlFor="confirm-password">
          Confirm password*
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </label>
        <button className="bg-orange-500 text-white font-semibold py-5">
          register
        </button>
      </form>
    </div>
  );
}
