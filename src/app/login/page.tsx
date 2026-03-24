"use client";

import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaGoogle, FaGithub, FaCog } from "react-icons/fa";

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
    <div className="min-h-screen w-full 
bg-[url('/assets/login-bg.png')] 
bg-cover bg-center bg-no-repeat after:absolute after:bg-slate-900/10 after:top-0 after:left-0 after:w-full after:h-full">
    <div
      className="min-h-screen w-full relative overflow-hidden "
      
    >



      {/* TOP-LEFT LOGO */}
       <Link href="/">
      <div className="absolute top-6 left-8 z-10 flex items-center gap-2">
        {/* estateai logo */}
        <img width={200} height={200} src="/assets/estateai.png"/>
      </div></Link>

      {/* MAIN CONTENT */}
      <div className="flex items-center  justify-center px-6 min-h-screen">
        <Toaster />

        <div className="w-full max-w-5xl flex items-center justify-between gap-12">

          {/* LEFT CARD */}
          <div
            className="w-full max-w-md text-white ml-24 p-8 rounded-3xl shadow-2xl"
            style={{
              background: "linear-gradient(160deg, #0b2a4a 0%, #0d3561 60%, #0a2440 100%)",
              boxShadow: "0 25px 60px rgba(13, 46, 94, 0.4), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <h2 className="text-base font-semibold text-gray-300 mb-1 tracking-widest uppercase">
              WELCOME, <span className="text-white">[User Name]!</span>
            </h2>

            <h1 className="text-3xl font-black leading-snug mb-7 text-white">
              Access Your <br /> Secure Control Panel
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(100,160,255,0.2)",
                }}
              >
                <FaUserAlt className="text-gray-400 text-sm flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Email or Workspace ID"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(100,160,255,0.2)",
                }}
              >
                <FaLock className="text-gray-400 text-sm flex-shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right text-sm text-gray-400 cursor-pointer hover:text-white transition">
                Forgot Password?
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full text-base font-black tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(90deg, #1e88e5, #29b6f6)",
                  boxShadow: "0 0 24px rgba(30, 136, 229, 0.6), 0 4px 15px rgba(41, 182, 246, 0.4)",
                }}
              >
                {loading ? "Signing in..." : "SIGN IN NOW"}
              </button>
            </form>

            {/* Social Login */}
            <div className="text-center mt-6 text-gray-400 text-sm">Or sign in with:</div>

            <div className="flex justify-center gap-6 mt-4">
              {/* Google */}
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FaGoogle className="text-xl" style={{ color: "#4285F4" }} />
              </button>
              {/* GitHub */}
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FaGithub className="text-xl text-white" />
              </button>
              {/* Settings / Other */}
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FaCog className="text-xl" style={{ color: "#90caf9" }} />
              </button>
            </div>

            <div className="text-center mt-6 text-gray-400 text-sm">
              Don't have an account?{" "}
              <span className="text-white font-bold cursor-pointer hover:underline">
                Sign Up
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex flex-col items-center text-center max-w-md">

            {/* Robot in circle */}
            <div
              className="w-72 h-72 rounded-full flex items-center justify-center mb-8 relative"
            
            >
              <img
                src="/assets/login-robo.png"
                alt="Cyber AI Robot"
                className="w-60 h-60 object-contain"
              />
            </div>

            <p className="text-[#1a3a5c] text-lg leading-relaxed font-medium max-w-sm">
              Your advanced cyber-security assistant is ready. Sign in to review
              your current network security posture and threat detection metrics.
            </p>

            <a
              href="#"
              className="mt-5 text-[#1565c0] font-semibold underline underline-offset-4 hover:text-[#0d47a1] transition text-base"
            >
              Need Help?
            </a>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;