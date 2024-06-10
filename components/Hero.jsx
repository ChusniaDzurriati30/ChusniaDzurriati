import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden  py-12 xl:py-24 h-auto bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex md:flex-row justify-between gap-x-8">
          <div className="flex flex-col justify-center max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Informatics Enginering students</div>
            <h1 className="text-4xl md:h1 font-bold  mb-4 ">Hello, my name is Chusnia Dzurriati</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I'am a Students in informatics engineering..</p>
            <div className="flex  gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href=" https://wa.me/6285747579309">
                <Button className="gap-x-2 ">
                  Contact me <Send size={10} />
                </Button>
              </Link>
              <Link href="https://drive.google.com/file/d/1UqaE-gToStEqoCjex0iWMCbfXfT__WSe/view?usp=sharing" target="_blank">
                <Button className="gap-x-2">
                  Download CV <Download size={10} />
                </Button>
              </Link>
            </div>
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>

          {/* Image (Stacked on Mobile, Side-by-Side on Desktop) */}
          <div className="xl:flex relative ">
            {/* Badges */}

            <div className="hidden xl:block">
              <Badge containerStyles="absolute top-[24%] -left-[3rem]" icon={<RiBriefcase4Fill />} endCountNum={5} badgeText="Experience" />
              <Badge containerStyles="absolute  top-[69%] -right-8" icon={<RiTodoFill />} endCountNum={13} endCountText="+" badgeText="Finished Projects" />
            </div>

            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[350px] h-[350px] xl:w-[500px] xl:h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="bg-hero_shape w-[360px] h-[312px] xl:w-[510px] xl:h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/nia 1.png" className="kesy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
