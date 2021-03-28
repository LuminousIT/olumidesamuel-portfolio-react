import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2013 - 2020",
    content: "Ladoke Akintola University of Technology, Ogbomoso, Oyo State.",
  },
  {
    id: 2,
    title: "National Diploma",
    years: "2011 - 2013",
    content: "Ladoke Akintola University of Technology, Ogbomoso, Oyo State.",
  },
  // {
  //   id: 3,
  //   title: "Honours Degree",
  //   years: "2013 - 2009",
  //   content: "Airforce Secondary School, Ikeja",
  // },
];

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    years: "April 2020 - Present",
    content:
      "● Design, develop and maintain a ticketing management system used by over 1000 agents and sub-agents of Lagos State Transport Management Authority. ● Developed a peer to peer mobile platform that connects people and businesses who need cash with people who have the cash to deposit or transfer using react-native.",
  },
  {
    id: 2,
    title: "Web and Design Intern",
    years: "2019 - 2020",
    content:
      "Developed the frontend of a document management system in collaboration with my team during the internship.",
  },
  // {
  //   id: 3,
  //   title: "Back-End Developer",
  //   years: "2013 - 2009",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
