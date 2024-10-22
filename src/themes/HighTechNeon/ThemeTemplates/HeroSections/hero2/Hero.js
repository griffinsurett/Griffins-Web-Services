// hero1.js
import React from "react";
import "./hero.css";
import Button from "../../theme-components/Buttons/Button";
import Logo from "../../theme-components/Logo/Logo";
import SimpleTypewriter from "../../theme-components/TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";

const Hero1 = () => {
  return (
    <section
      id="hero-section"
      className="hero-height flex item-align-center responsive"
    >
      <div className="hero-left morethan-half-container responsive-center w-90">
      {/* <SimpleTypewriter text="Hello, World! Just one space between words." speed={150} /> */}
      <h4 className="section-title text-shadow-for-dark">
          Griffin’s Web Services
        </h4>
        <h1 className="smaller-top-space">Websites and All Things Digital.</h1>
        <p className="p-small bottom-space">
          Your premier one-stop shop for website design and development, expert
          social media and digital marketing, and creative graphic design
          services.
        </p>
        <div className="hero-btn-container responsive-center smaller-top-space smaller-bottom-space">
          <Button
            text="Get Started"
            className="additional-class p-small"
          ></Button>
        </div>
      </div>
      <div className="hero-right lessthan-half-container large-screens">
        <Logo
          ContainerClassName="flex justify-center item-align-center logo"
          width="460px" // Width is set, and height will be 90% of this
          classname=""
          responsive={true}
        />
      </div>
    </section>
  );
};

export default Hero1;
