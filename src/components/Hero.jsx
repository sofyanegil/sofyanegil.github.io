/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Hello Everyone 👋, I'm
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Sofyan Egi Lesmana</span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Student at
              <span className="text-dark"> Universitas Pasundan</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed text-justify">
              A Learner to become
              <span className="text-dark font-bold"> Junior Software Engineer </span>
              who loves to build and share projects about web. I've Enjoyed JavaScript for main language to creating a project.
            </p>

            <a
              href="https://www.linkedin.com/in/sofyanegi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 LG:mt-9 lg:right-0">
              <img width={400} height={400} src="/profilePic.png" alt="Sofyan Egi" className="max-w-full mx-auto" />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 ">
                <svg width={400} height={375} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M42.6,-43.9C58.1,-37.9,75.2,-27.1,82.2,-11C89.1,5,85.8,26.3,76,44.3C66.1,62.4,49.8,77.2,30.5,84.3C11.3,91.5,-10.8,91.1,-30.5,83.9C-50.2,76.7,-67.4,62.8,-72.8,45.8C-78.2,28.8,-71.7,8.6,-64.5,-7.7C-57.3,-24.1,-49.3,-36.8,-38.5,-43.5C-27.6,-50.3,-13.8,-51.1,-0.1,-51C13.6,-50.9,27.2,-49.8,42.6,-43.9Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
