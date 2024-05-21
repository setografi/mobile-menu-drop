import React from "react";

function Navbar({ isOpen, toggleMenu }) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <>
      <header className="relative top-0 left-0 bg-blue-800 text-white p-4 flex justify-between border-b border-white border-opacity-20 items-center z-10">
        <div className="text-2xl">
          <h1 className="text-white">Logo</h1>
        </div>

        <div className="cursor-pointer" onClick={toggleMenu}>
          <button className="grid grid-rows-3 h-6 w-6 justify-center items-center group">
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "bg-white rotate-45 translate-y-2 group-hover:opacity-50"
                  : "group-hover:opacity-50"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "bg-white opacity-0" : "group-hover:opacity-50"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "bg-white -rotate-45 -translate-y-2 group-hover:opacity-50"
                  : "group-hover:opacity-50"
              }`}
            />
          </button>
        </div>
      </header>

      <nav
        className={`absolute bg-blue-800 text-white w-full transition-transform duration-300 ease-in-out ${
          isOpen ? "" : ""
        }`}
      >
        <ul className="flex flex-col items-start">
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-home-7-line text-2xl"></i>
            <a href="#" className="block p-4">
              Informasi
            </a>
          </li>
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-login-box-line text-2xl"></i>
            <a href="#" className="block p-4">
              Login
            </a>
          </li>
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-draft-line text-2xl"></i>
            <a href="#" className="block p-4">
              Panduan
            </a>
          </li>
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-calendar-line text-2xl"></i>
            <a href="#" className="block p-4">
              Persyaratan
            </a>
          </li>
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-list-check text-2xl"></i>
            <a href="#" className="block p-4">
              Daftar Penerima Sementara
            </a>
          </li>
          <li className="flex items-center w-full text-start px-4 duration-300 transition hover:bg-white hover:bg-opacity-20">
            <i className="ri-file-3-line text-2xl"></i>
            <a href="#" className="block p-4">
              Unduh Formulir
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
