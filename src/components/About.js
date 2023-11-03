import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Data Scientist / Machine Learning Engineer </b> at 
        <a href="https://www.digica.com"> Digica</a>, an AI software solutions provider, 
        working on various <b>Computer Vision</b> projects and <b>Synthetic Data </b>generation.
        I graduated with a <b>Master of Science</b> degree in <b>Computer Science</b> ( 
        <b>Artificial Intelligence </b> and <b> Machine Learning </b>specialization) from 
        <a href="https://p.lodz.pl"> Lodz University of Technology</a> in 2022.
      </p>
    );
    const two = (
      <p>
        Outside of work, I am interested in following the scientific developments, 
        broadening my horizons, and solving the equation for a happy life. I also travel a lot. And make vlogs.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:gracjanss98@gmail.com">
          gracjanss98@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );

    const tech_stack = [
      "Python",
      "PyTorch",
      "OpenCV",
      "SQL",
      "Pandas",
      "Blender",
      "GCP",
      "Git",
      "Docker",
      "Linux"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some main technologies I like to work with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/meg.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
