/* eslint-disable max-len */
import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-36 pb-3">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-lg mb-3">About me</h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Long life learner</h2>
            <p className="font-medium text-base text-secondary lg:text-large text-justify">
              My name is Sofyan Egi Lesmana, currently studying at Pasundan University, majoring in informatics engineering. I have been learning web development for two years, I have experience in Web Development, both Front-End, and
              Back-end. I believe that I have the characteristics and skills that the position needs and deserves. On the Front end, I have skills in HTML, CSS, Sass, Javascript, and the React Js Framework.For Back End, I have skills in
              Java, Node JS, PHP, and Laravel Framework.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Lets connect!</h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-large">Find me in apps below! </p>
            <div className="flex items-center">
              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/sofyanegi/" className="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:bg-primary hover:text-white" target="_blank" rel="noreferrer noopener">
                <img src="/icons/linkedin.svg" alt="" />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sofyanegi/" className="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:bg-primary hover:text-white" target="_blank" rel="noreferrer noopener">
                <img src="/icons/instagram.svg" alt="" />
              </a>
              {/* Github */}
              <a href="https://www.instagram.com/sofyanegi/" className="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:bg-primary hover:text-white" target="_blank" rel="noreferrer noopener">
                <img src="/icons/github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
