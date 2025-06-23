import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Welcome to Student Portal</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Manage your academic details in one place.
      </p>
    </div>
  );
}