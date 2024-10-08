import React, { ReactElement } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickComponents: React.FC = (): ReactElement => {
  // Настройки для карусели
  const webSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
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
    slidesToShow: 5,
  };

  const languagesSettings = {
    ...webSettings,
    rtl: true,
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
      <Slider {...webSettings}>
        <div className="">
          <FaHtml5 size={80} color="#E34F26" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaJs size={80} color="#F7DF1E" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaReact size={80} color="#61DAFB" />
          <p className="relative left-3.5">HTML5</p>
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
          <p className="relative left-3.5">HTML5</p>
        </div>
      </Slider>
      <h3 className="text-2xl   p-5 font-bold mb-6 text-slate-900">Database</h3>
      <Slider {...databaseSettings}>
        <div>
          <FaHtml5 size={80} color="#E34F26" />
        </div>

        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
        <div>
          <FaJs size={80} color="#F7DF1E" />
        </div>
        <div>
          <FaReact size={80} color="#61DAFB" />
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
      </Slider>
      <h3 className="text-2xl  p-5 font-bold mb-6 text-slate-900">Other</h3>
      <Slider {...otherSettings}>
        <div>
          <FaHtml5 size={80} color="#E34F26" />
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
        <div>
          <FaJs size={80} color="#F7DF1E" />
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
        <div>
          <FaReact size={80} color="#61DAFB" />
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
        </div>
      </Slider>
      <h3 className="text-2xl p-5 font-bold mb-6 text-slate-900">Languages</h3>
      <Slider {...languagesSettings}>
        <div>
          <FaHtml5 size={80} color="#E34F26" />
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
        <div>
          <FaJs size={80} color="#F7DF1E" />
        </div>
        <div>
          <FaReact size={80} color="#61DAFB" />
        </div>
        <div>
          <FaCss3Alt size={80} color="#1572B6" />
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
        </div>
        <div>
          <FaNodeJs size={80} color="#339933" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickComponents;
