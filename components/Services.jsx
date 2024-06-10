import { Blocks, TabletSmartphone, Figma, PanelsTopLeft, Target, ShieldPlus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <Figma size={72} strokeWidth={0.8} />,
    title: "UI Design",
    description:
      "Desainer UI berpengalaman dengan perhatian tajam terhadap detail dan hasrat untuk desain berpusat pada pengguna. Mahir dalam Figma dan alat desain lainnya untuk membuat wireframe, prototipe, dan maket yang akurat. Mampu menerjemahkan ide desain menjadi antarmuka pengguna yang fungsional dan menarik.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "dapat membangun situs web yang responsif dan ramah pengguna menggunakan  HTML, CSS, Javascript, Next JS, React JS, Bootstrap, dan Tailwind CSS. Bersemangat dalam memberikan solusi web berkualitas tinggi yang memenuhi kebutuhan klien.",
  },
  {
    icon: <TabletSmartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Mahir dalam Dart untuk pengembangan Android dengan pengalaman membuat aplikasi asli. Ahli dalam desain UI/UX dan prinsip interaksi pengguna untuk memastikan pengalaman seluler yang intuitif dan menarik.",
  },
  {
    icon: <Target size={72} strokeWidth={0.8} />,
    title: "Project Management",
    description:
      "Kemampuan yang terbukti untuk memimpin dan mengelola tim lintas fungsi untuk menyelesaikan proyek tepat waktu dan sesuai anggaran. Keahlian dalam perencanaan, pengorganisasian, dan pelaksanaan tugas proyek sambil memastikan komunikasi dan kolaborasi yang efektif. Keterampilan pemecahan masalah dan pengambilan keputusan yang kuat untuk menavigasi tantangan dan mencapai tujuan proyek.",
  },
  {
    icon: <ShieldPlus size={72} strokeWidth={0.8} />,
    title: "Additional Skills",
    description:
      "Komunikasi, Kerja Sama Tim, Kepemimpinan, Pemecahan Masalah, Berpikir Kritis, Kemampuan Beradaptasi. Pemahaman yang kuat tentang sistem informasi dan proses bisnis. Kemampuan untuk mempelajari teknologi baru dengan cepat dan beradaptasi dengan perubahan kebutuhan.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 h-full ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              //   className="w-full max-w-[424px] flex flex-col shadow-md rounded-lg overflow-hidden" // Added responsive styles
              className=" w-full max-w-[424px]  flex flex-col shadow-md rounded-lg 
                             items-center relative ">
              <CardHeader className="text-primary absolute -top-[60px] p-4">
                <div className="w-[140px] h-auto bg-white dark:bg-background flex justify-center items-center ">{item.icon} </div>
              </CardHeader>
              <CardContent className="text-center p-8">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
