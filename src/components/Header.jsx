import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-bold">Logo</h1>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://chat.openai.com/?model=text-davinci-002-render-sha"
                className="text-gray-300 hover:text-white font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://chat.openai.com/?model=text-davinci-002-render-sha"
                className="text-gray-300 hover:text-white font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://chat.openai.com/?model=text-davinci-002-render-sha"
                className="text-gray-300 hover:text-white font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://chat.openai.com/?model=text-davinci-002-render-sha"
                className="text-gray-300 hover:text-white font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
