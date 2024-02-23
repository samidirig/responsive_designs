"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  const simpleFooter = (
    <div className="bg-gradient-to-r from-green-200 to-cyan-100 text-black h-full p-5 text-center">
      <div className="flex flex-row justify-between items-center px-5 mt-4">
        <span className="text-3xl text-black font-semibold">LOGO</span>

        <div className="w-auto flex flex-row items-center justify-center gap-5">
          <Link
            className="text-black text-md font-medium hover:underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-black text-md font-medium hover:underline"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-black text-md font-medium hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="w-auto flex flex-row items-center justify-center gap-5">
          <FaLinkedin
            size={20}
            className="cursor-pointer footer-icon rounded-xl"
            onClick={() => {
              window.open("https://www.linkedin.com/", "_blank");
            }}
          />
          <FaGithub
            size={20}
            className="cursor-pointer footer-icon rounded-full"
            onClick={() => {
              window.open("https://github.com/", "_blank");
            }}
          />
          <MdMail
            size={20}
            className="cursor-pointer footer-icon rounded-2xl"
            onClick={() => {
              window.location.href = "mailto:samidirig@gmail.com";
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full py-4 mt-4">
        <div style={{ width: "95%" }} className="h-px bg-black" />
      </div>

      <div className="flex flex-row justify-between items-center px-5 mt-4">
        <div className="text-black text-sm text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>

        <div className="w-2/5 flex flex-row items-center justify-center gap-5">
          <button className="text-black text-sm font-medium hover:underline">
            Privacy Policy
          </button>
          <button className="text-black text-sm font-medium hover:underline">
            Terms of Service
          </button>
          <button className="text-black text-sm font-medium hover:underline">
            Cookies Settings
          </button>
        </div>
      </div>
    </div>
  );

  return <footer style={{ height: "auto" }}>{simpleFooter}</footer>;
}
