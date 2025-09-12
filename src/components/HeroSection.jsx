import React from "react";
import ScrambleLetter from "./ScrambleLetter";
import profilePic from "./profile.jpg"; // replace with your image
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background floating particles */}
      <div className="particles-background"></div>

      {/* Profile Picture with glow */}
      <div className="profile-container">
        <img src={profilePic} alt="Noman Mahmood" className="profile-pic" />
        <div className="profile-glow"></div>
      </div>

      {/* Hero Title */}
      <h1 className="hero-text">
        <ScrambleLetter
          text="Digital Data Analysts Specialize in Google Ads Audit"
          duration={2000}
        />
      </h1>

      {/* Name + Description */}
      <div className="hero-info">
        <h2 className="hero-name">
          <ScrambleLetter text="Noman Mahmood" duration={1500} delay={200} />
        </h2>
        <div className="hero-description">
          <p>
            <ScrambleLetter
              text="I help businesses unlock the full potential of their Google Ads campaigns by identifying missed opportunities and areas for improvement."
              duration={1800}
              delay={400}
            />
          </p>
          <p>
            <ScrambleLetter
              text="Through a detailed audit, I provide actionable recommendations that boost campaign effectiveness and align with business goals."
              duration={1800}
              delay={600}
            />
          </p>
          <ul>
            <li>
              <ScrambleLetter
                text="Optimize ad spend efficiency"
                duration={1500}
                delay={800}
              />
            </li>
            <li>
              <ScrambleLetter
                text="Increase conversion rates"
                duration={1500}
                delay={1000}
              />
            </li>
            <li>
              <ScrambleLetter
                text="Enhance campaign performance"
                duration={1500}
                delay={1200}
              />
            </li>
          </ul>
          <p>
            <ScrambleLetter
              text="My approach ensures your ad spend works smarter, not harder."
              duration={1500}
              delay={1400}
            />
          </p>
        </div>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/noman-mahmood-2022-2026-/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <ScrambleLetter text="LinkedIn" duration={1200} delay={1600} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
