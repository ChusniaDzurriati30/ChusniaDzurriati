import DevAboutImg from "./DevAboutImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneIcon, GraduationCap, Calendar, Briefcase, PhoneCall } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Chusnia Dzurriati",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 857 4757 9309",
  },
  {
    icon: <MailIcon size={20} />,
    text: "chusniadzurriati.1313@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "PEMALANG, JAWA TENGAH, INDONESIA",
  },
];

const qualificationData = [
  {
    title: "Pendidikan",
    data: [
      {
        university: "Universitas Muhammadiyah Purwokerto",
        qualification: "Bachelor of Engineering (S1), Informatics Engineering",
        years: "2021 - 2025",
      },
    ],
  },

  {
    title: "Pengalaman",
    data: [
      {
        company: "Career Upgrade",
        role: "Chief Technology Officer",
        years: "Mei 2024 - Sekarang ",
      },
      {
        company: "Badan Eksekutif Mahasiswa Fakultas Teknik dan Sains Universitas Muhammadiyah Purwokerto",
        role: "Wakil Presiden",
        years: "Juli 2023 – Juni 2024",
      },
      {
        company: " DICODING MSIB - Studi Independen ",
        role: "Pengembang Front-End Web Dan Back-End",
        years: "14 Agustus 2023 - 31 Desember 2023",
      },
      {
        company: "KKN KULIAH KERJA NYATA Desa Slukatan Kecamatan Mojotengah Kabupaten Wonosobo",
        role: "Sie.Pengabdian ",
        years: "19 Januari – 25 Februari 2024",
      },
      {
        company: "Anggota Magang Himpunan Mahasiswa Teknik Informatika",
        role: "SDM (Sumber Daya Manusia)",
        years: "Desember 2021 - Desember 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Javascript Dasar, Next.js, Prototype, Figma, Git dan Github, Flutter, Dart.",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vs code.png",
      },
      {
        imgPath: "/about/github.png",
      },
      {
        imgPath: "/about/android.png",
      },
      {
        imgPath: "/about/ppt.png",
      },
      {
        imgPath: "/about/word.png",
      },
      {
        imgPath: "/about/excel.png",
      },
      {
        imgPath: "/about/figma.png",
      },
      
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-full pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto"> About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevAboutImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[520px] h-[520px] bg-no-repeat relative " imgSrc="/about/nia.png" />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Front End Developer</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Saya tertarik secara khusus dengan bidang front-end development, di mana saya dapat menggabungkan desain visual
dengan pemrograman interaktif untuk menciptakan pengalaman pengguna yang luar biasa. Karier aspirasi saya adalah
menjadi seorang front-end developer yang terampil dan kreatif. Saya juga memiliki keterampilan
dalam manajemen tim dan komunikasi yang jelas. Saya mampu memimpin tim, mengoordinasikan proyek, serta
berkomunikasi efektif dengan berbagai pemangku kepentingan untuk mencapai tujuan bersama. Saya ingin mendalami
dan mengaplikasikan kemampuan saya ke dunia profesional.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    {/* Pengalaman & Pendidikan wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Pengalaman */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "Pengalaman").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Pengalaman").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div
                                    className="w-[11px] h-[11px] rounded-full
                                                                    bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* Pendidikan */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "Pendidikan").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Pendidikan").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div
                                    className="w-[11px] h-[11px] rounded-full
                                                                    bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
