import React from 'react';

export default function Header() {
  window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) header.classList.add('navbar-fixed');
    else header.classList.remove('navbar-fixed');
  };

  const buttonClick = () => {
    const hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('hamburger-active');

    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('hidden');
  };

  return (
    <header className="bg-white absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="text-xl font-bold text-primary block py-6">
              Sofyanegi
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              name="hamburger"
              className="block absolute right-4 lg:hidden"
              onClick={() => {
                buttonClick();
              }}
            >
              <span className="hamburger-line origin-top-left" />
              <span className="hamburger-line" />
              <span className="hamburger-line origin-bottom-left" />
            </button>
            <nav id="nav-menu" className="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full hidden lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul className="block transition duration-500 lg:flex">
                <li className="group">
                  <a href="#about" className="nav-link">
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a href="#contact" className="nav-link">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
