import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/rash.svg",
    userName: "Tella Abdulrasheed",
    subtitle: "Fullstack Developer at TAP",
    review:
      "Olumide's commitment to his work is quite impressive. He's good and delivered project on time excellently. Great guy! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Awoda Roland",
    subtitle: "Frontend Developer at TAP",
    review:
      "I enjoy working with him and learn so much from working together. You make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "Funsho Oyenuga",
    subtitle: "Lead Android Developer at TAP",
    review: "",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
