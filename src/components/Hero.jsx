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
              Halo Semua 👋, Saya
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Sofyan Egi Lesmana</span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Mahasiswa
              <span className="text-dark"> Universitas Pasundan</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed text-justify">
              Mengambil program studi
              <span className="text-dark font-bold"> Teknik Informatika. </span>
              Saat ini sedang mengikuti kegiatan Kampus Merdeka Studi Independen Bersertifikat Dicoding Batch 2 dengan Learning Path FrontEnd dan BackEnd Web.
            </p>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
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
