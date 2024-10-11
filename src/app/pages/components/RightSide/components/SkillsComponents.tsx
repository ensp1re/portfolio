import React, { ReactElement } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SiDjango,
  SiElasticsearch,
  SiExpress,
  SiFlask,
  SiKibana,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiRedis,
  SiRedux,
  SiSelenium,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import Flag from "react-world-flags";

const SkillsComponents: React.FC = (): ReactElement => {
  const webSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
    swipe: false,
  };

  const databaseSettings = {
    ...webSettings,
    rtl: true,
  };

  const otherSettings = {
    ...webSettings,
  };


  return (
    <div className="skills-carousel">
      <p className="mb-[3rem]">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <h3 className="text-2xl  p-5 font-bold mb-6 text-slate-900">
        My Web Developing Skills
      </h3>
      <Slider className="font-semibold" {...webSettings}>
        <div>
          <FaHtml5 size={80} color="#E34F26" />
          <span className="relative left-3.5 mt-2">HTML5</span>
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
          <p className="relative left-5 mt-2">CSS3</p>
        </div>
        <div>
          <FaJs size={80} color="#F7DF1E" />
          <p className="relative left-2 mt-2">JavaScript</p>
        </div>
        <div>
          <SiTypescript size={80} color="#3178C6" />
          <p className="relative left-1 mt-2">TypeScript</p>
        </div>
        <div>
          <FaReact size={80} color="#61DAFB" />
          <p className="relative left-3.5 mt-2">React</p>
        </div>
        <div>
          <SiNextdotjs size={80} color="#000000" />
          <p className="relative left-4 mt-2">Next.js</p>
        </div>
        <div>
          <SiVite size={80} color="#646CFF" />
          <p className="relative left-4 mt-2">Vite.js</p>
        </div>
        <div>
          <SiTailwindcss size={80} color="#38B2AC" />
          <p className="relative mt-2">Tailwind CSS</p>
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
          <p className="relative left-2 mt-2">Node.js</p>
        </div>
        <div>
          <SiExpress size={80} color="#000000" />
          <p className="relative left-2 mt-2">Express.js</p>
        </div>
        <div>
          <SiSocketdotio size={80} color="#010101" />
          <p className="relative left-2.5 mt-2">Socket.IO</p>
        </div>
      </Slider>
      <h3 className="text-2xl p-5 font-bold mb-6 text-slate-900">Database</h3>
      <Slider className="font-semibold" {...databaseSettings}>
        <div>
          <SiMongodb size={80} color="#47A248" />
          <p className="relative left-1 mt-2">MongoDB</p>
        </div>
        <div>
          <SiMysql size={80} color="#4479A1" />
          <p className="relative left-3.5 mt-2">MySQL</p>
        </div>
        <div>
          <SiPostgresql size={80} color="#4169E1" />
          <p className="mt-2">PostgreSQL</p>
        </div>
        <div>
          <SiPrisma size={80} color="#0C344B" />
          <p className="relative left-3.5 mt-2">Prisma</p>
        </div>
      </Slider>
      <h3 className="text-2xl p-5 font-bold mb-6 text-slate-900">Other</h3>
      <Slider className="font-semibold" {...otherSettings}>
        <div className="mr-3">
          <SiElasticsearch size={80} color="#005571" />
          <p className="relative mt-2">Elasticsearch</p>
        </div>
        <div className="mr-3">
          <SiRabbitmq size={80} color="#FF6600" />
          <p className="relative left-1 mt-2">RabbitMQ</p>
        </div>
        <div className="mr-3">
          <SiKibana size={80} color="#005571" />
          <p className="relative left-3.5 mt-2">Kibana</p>
        </div>
        <div>
          <SiRedis size={80} color="#DC382D" />
          <p className="relative left-3.5 mt-2">Redis</p>
        </div>
        <div className="mr-3">
          <SiRedux size={80} color="#764ABC" />
          <p className="relative left-3.5 mt-2">Redux</p>
        </div>
        <div className="mr-3">
          <FaPython size={80} color="#3776AB" />
          <p className="relative left-3.5 mt-2">Python</p>
        </div>
        <div className="mr-3">
          <SiFlask size={80} color="#000000" />
          <p className="relative left-3.5 mt-2">Flask</p>
        </div>
        <div className="mr-3">
          <SiDjango size={80} color="#092E20" />
          <p className="relative left-5 mt-2">Django</p>
        </div>
        <div className="mr-3">
          <SiSelenium size={80} color="#43B02A" />
          <p className="relative left-2 mt-2">Selenium</p>
        </div>
      </Slider>
      <h3 className="text-2xl p-5 font-bold mb-6 text-slate-900">Languages</h3>
      <div className="font-semibold gap-5 w-full flex flex-row ">
        <div className="flex flex-col justify-center items-center">
          <Flag code="gb" className="h-12" />
          <p className="mt-2">English</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Flag code="ua" className="h-12 w-20" />
          <p className="mt-2">Ukrainian</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Flag code="es" className="h-12" />
          <p className="mt-2">Spanish</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponents;
