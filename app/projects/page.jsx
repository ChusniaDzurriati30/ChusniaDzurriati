"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/my project 1.png",
    category: "Next.js",
    name: "Career Upgrade",
    description: "Career Upgrade adalah sebuah Start-Up yang menyediakan platform pengembangan skill persiapan karir untuk calon profesional dan menjaring koneksi antara perusahaan dalam mencari pekerja profesional.",
    link: "https://career-upgrade-alpha.vercel.app/",
    github: "/",
  },
  {
    image: "/work/my project2.png",
    category: "html,css,js",
    name: "Babiz-Finder ",
    description: "BabizFinder - Banyumas Business Finder  Cari UMKM? Pas banget, bisa cari info di sini!. Aplikasi web yang fokus pada peningkatan eksposur dan aksesibilitas UMKM di Banyumas, Jawa Tengah.",
    link: "https://muhammad-ramdani.github.io/babiz/",
    github: "/",
  },
  {
    image: "/work/my project3.png",
    category: "Flutter Dart",
    name: "Online Shop Elite Watches",
    description: "plikasi e-commerce untuk penjualan jam tangan wanita yang dibuat dengan Flutter dan Dart dapat memiliki fitur CRUD (Create, Read, Update, Delete) yang terintegrasi dalam profil pengguna.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "JavaScript",
    name: "Restaurant",
    description: "Katalog Restoran PWA (Progressive Web App) adalah aplikasi berbasis web yang menyediakan daftar restoran yang bisa diakses melalui berbagai perangkat.",
    link: "https://chusniarestoooo.netlify.app/",
    github: "https://github.com/ChusniaDzurriati30/submission-katalog-restoran-pwa-testing-and-optimized",
  },
  {
    image: "/work/my project5.png",
    category: "JavaScript",
    name: "Book shelf",
    description: "Aplikasi pencatatan buku yang sudah dibaca ataupun yang belum.",
    link: "https://submission-aplikasi-pengelolaan-da-chusniadzurriati30s-projects.vercel.app/",
    github: "https://github.com/ChusniaDzurriati30/Submission-Aplikasi-Pengelolaan-Data-Menggunakan-DOM-dan-Web-Storage",
  },
 
];

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-7 lg:max-w-[740px]
          mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
