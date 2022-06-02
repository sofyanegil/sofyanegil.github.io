/* eslint-disable max-len */
import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" className="pt-10 pb-3">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Biodata</h2>
              <p className="font-medium text-base text-dark lg:text-large text-justify">
                Saya Sofyan Egi Lesmana, lahir di Cilacap 20 tahun lalu dan sekarang menetap di Bandung. Saya anak tunggal, saat ini sedang kuliah di Universitas Pasundan dengan jurusan Teknik Informatika.
              </p>
              <p className="font-medium text-base text-dark lg:text-large text-justify mt-2">
                Pilihan studi yang di ambil karena ketertarikan dalam bidang teknologi, dan bercita cita untuk bisa menjadi bagian industri terutama di bidang IT. Saat ini saya sedang mempelajari HTML, CSS, Javascript, dll.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Pendidikan</h3>
              <li className="font-medium text-base text-secondary mb-3 lg:text-large">UNIVERSITAS PASUNDAN, 2019 - Sekarang </li>
              <li className="font-medium text-base text-secondary mb-3 lg:text-large">SMAN 1 MARGAASIH, 2016 - 2019 </li>
              <li className="font-medium text-base text-secondary mb-3 lg:text-large">SMPN 2 MARGAHAYU, 2013 - 2016 </li>
              <li className="font-medium text-base text-secondary mb-3 lg:text-large">SDN MARGAHAYU 13, 2007 - 2013 </li>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="pb-3">
        <div className="container">
          <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Kontak dan Media Sosial</h3>
          <div className="lg:flex sm:block">
            <li className="list-none m font-medium text-base text-secondary mb-8 lg:text-large mx-2">
              <a href="mailto:contact.sofyan@gmail.com" className="bg-primary p-3 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </li>
            <li className="list-none m font-medium text-base text-secondary mb-8 lg:text-large mx-2">
              <a href="https://wa.me/+62895330087325" className="bg-primary p-3 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
            </li>
            <li className="list-none m font-medium text-base text-secondary mb-8 lg:text-large mx-2">
              <a href="https://www.instagram.com/sofyanegi/" className="bg-primary p-3 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="list-none m font-medium text-base text-secondary mb-8 lg:text-large mx-2">
              <a href="https://www.linkedin.com/in/sofyanegi/" className="bg-primary p-3 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
                Linked.in
              </a>
            </li>
            <li className="list-none m font-medium text-base text-secondary mb-8 lg:text-large mx-2">
              <a href="https://www.github.com/sofyanegil" className="bg-primary p-3 text-white rounded-lg" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
