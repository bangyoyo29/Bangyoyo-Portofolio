import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree, blogImgFour, blogImgFive } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="Tips belajar UI/UX Design Secara Otodidak Untuk Pemula"
            category="UI/UX Design"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 15, 2020"
            subTitle="Cara Membuat Studio Rekaman Murah"
            category="Music"
          />
          <BlogCard
            image={blogImgThree}
            title="July 14, 2020"
            subTitle="Esports Resmi jadi Olahraga Prestasi"
            category="Games"
          />
          <BlogCard
            image={blogImgFour}
            title="July 13, 2020"
            subTitle="6 Bahasa Pemrograman untuk Analisis Data, Wajib Tahu!"
            category="Tutorial Pemrograman"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="July 13, 2020"
            subTitle="Cara Menjadi Streamer Game Sukses dan Populer, Pemula Juga Bisa"
            category="Games"
          />
          <BlogCard
            image={blogImgFour}
            title="July 14, 2020"
            subTitle="Belajar Bahasa Pemrograman Python untuk Data Analyst"
            category="Tutorial Pemrograman"
          />
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="Berapa Sih Gaji UI/UX Designer?"
            category="UI/UX Design"
          />
          <BlogCard
            image={blogImgFive}
            title="September 16, 2020"
            subTitle="Tutorial Laravel 11 untuk Pemula, Mudah Banget!"
            category="Tutorial Pemrograman"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
