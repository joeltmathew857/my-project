import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
