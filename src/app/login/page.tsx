"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Login successful 🚀");
      setLoading(false);
    }, 1500);
  };

  return (
   <div className="min-h-screen flex items-center justify-center 
bg-[url('/assets/login-bg.png')] 
bg-contain bg-center bg-no-repeat px-4">
      <Toaster />

      <div className="w-full max-w-6xl flex items-center justify-between gap-10">

        {/* LEFT CARD */}
        <div className="w-full max-w-md bg-[#0b2a4a] text-white p-8 rounded-3xl shadow-2xl">
          
          <h2 className="text-xl font-semibold mb-4">
            WELCOME, <span className="text-gray-300">[User Name]!</span>
          </h2>

          <h1 className="text-3xl font-bold leading-tight mb-6">
            Access Your <br /> EstateAi Dashboard Panel
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div className="flex items-center gap-3 border border-blue-400/30 rounded-xl px-4 py-3 bg-transparent">
              <FaUserAlt className="text-gray-300" />
              <input
                type="email"
                placeholder="Email or Workspace ID"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 border border-blue-400/30 rounded-xl px-4 py-3">
              <FaLock className="text-gray-300" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right text-sm text-gray-300 cursor-pointer hover:underline">
              Forgot Password?
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:scale-105 transition"
            >
              {loading ? "Signing..." : "SIGN IN NOW"}
            </button>
          </form>

          {/* Social */}
          <div className="text-center mt-6 text-gray-300 text-sm">
            Or sign in with:
          </div>

          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <span>G</span>
            <span>🐙</span>
            <span>⚙️</span>
          </div>

          <div className="text-center mt-6 text-gray-300 text-sm">
            Don’t have an account?{" "}
            <span className="text-white font-semibold cursor-pointer">
              Sign Up
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex flex-col items-center text-center max-w-md">
          
          <img
            src="/assets/login-robo.png" // replace with your robot image
            className="w-72 h-72 object-contain mb-6"
          />

          <p className="text-gray-700 text-lg leading-relaxed">
           Your AI-powered real estate ecosystem is ready.
Log in to activate smart agents that handle leads, marketing, and client engagement — 24/7, without limits. </p>

          <p className="mt-4 text-blue-600 cursor-pointer underline">
            Need Help?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;