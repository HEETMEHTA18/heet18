import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 mt-12 bg-transparent text-center">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <span>
          &copy; Copyright 2025 &nbsp;|&nbsp; Designed &amp; Made by <span className="text-white font-semibold">Heet Mehta</span>
        </span>
        <span className="mt-2 md:mt-0">
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}