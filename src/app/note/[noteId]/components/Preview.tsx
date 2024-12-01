"use client";
import React from "react";

const Preview = ({ fileLink }: { fileLink: string }) => {
  const handlePreview = () => {
    window.open(fileLink, "_blank");
  };
  return (
    <div>
      <button
        onClick={handlePreview}
        className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        Preview
      </button>
    </div>
  );
};

export default Preview;
