import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
      <a href="#">
        <li className="sidenavLi">Blog Page</li>
      </a>
      <a href="#">
        <li className="sidenavLi">Portfolio Page</li>
      </a>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Responsive Website</li>
        <li className="sidenavLi">Grapic Design</li>
        <li className="sidenavLi">Mobile Application</li>
        <li className="sidenavLi">Packaging Design</li>
        <li className="sidenavLi">T-Shirt Design</li>
        <li className="sidenavLi">Logo Design</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">Tips belajar UI/UX Design Secara Otodidak Untuk Pemula</li>
        <li className="sidenavLi">6 Bahasa Pemrograman untuk Analisis Data, Wajib Tahu!</li>
        <li className="sidenavLi">
        Belajar Bahasa Pemrograman Python untuk Data Analyst
        </li>
        <li className="sidenavLi">Tutorial Laravel 11 untuk Pemula, Mudah Banget!</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+62 8515-6492-719</li>
        <li className="sidenavLi">bangyoyoteam@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav