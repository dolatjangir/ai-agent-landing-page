"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaCog,
} from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Account created 🚀");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full 
bg-[url('https://res.cloudinary.com/djipgt6vc/image/upload/v1774335586/login-bg_myf3hh.png')] 
bg-cover bg-center bg-no-repeat 
after:absolute after:bg-slate-900/10 
after:top-0 after:left-0 after:w-full after:h-full
after:pointer-events-none">

      <div className="min-h-screen w-full relative overflow-hidden">

        {/* LOGO */}
        <Link href="/">
          <div className="absolute top-6 left-8 z-10">
            <img width={200} src="/assets/estateai.png" />
          </div>
        </Link>

        {/* MAIN */}
        <div className="flex items-center justify-center px-6 min-h-screen">
          <Toaster />

          <div className="w-full max-w-5xl flex items-center justify-between gap-12">

            {/* LEFT CARD */}
            <div
              className="w-full max-w-md text-white ml-24 p-8 rounded-3xl shadow-2xl"
              style={{
                background:
                  "linear-gradient(160deg, #0b2a4a 0%, #0d3561 60%, #0a2440 100%)",
                boxShadow:
                  "0 25px 60px rgba(13, 46, 94, 0.4), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <h2 className="text-base text-gray-300 mb-1 tracking-widest uppercase">
                CREATE YOUR ACCOUNT
              </h2>

              <h1 className="text-xl font-black mb-7">
                Join EstateAI  Platform
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 border border-blue-200/20">
                  <FaUserAlt className="text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent outline-none w-full text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 border border-blue-200/20">
                  <FaUserAlt className="text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent outline-none w-full text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 border border-blue-200/20">
                  <FaLock className="text-gray-400 text-sm" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="bg-transparent outline-none w-full text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 border border-blue-200/20">
                  <FaLock className="text-gray-400 text-sm" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-transparent outline-none w-full text-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-black uppercase hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(90deg, #1e88e5, #29b6f6)",
                  }}
                >
                  {loading ? "Creating..." : "CREATE ACCOUNT"}
                </button>
              </form>

              {/* SOCIAL */}
              <div className="text-center mt-6 text-gray-400 text-sm">
                Or sign up with:
              </div>

              <div className="flex justify-center gap-6 mt-4">
                <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <FaGoogle />
                </button>
                <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <FaGithub />
                </button>
                <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <FaCog />
                </button>
              </div>

              <div className="text-center mt-6 text-gray-400 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-white font-bold hover:underline">
                  Sign In
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE SAME */}
            <div className="hidden lg:flex flex-col items-center text-center max-w-md">
              <div className="w-72 h-72 rounded-full flex items-center justify-center mb-8">
                <img
                  src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335570/login-robo_y9a5vm.png"
                  className="w-60 h-60 object-contain"
                />
              </div>

              <p className="text-[#1a3a5c] text-lg max-w-sm">
                Create your AI-powered real estate workspace and manage leads,
                automation, and deals smarter.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;