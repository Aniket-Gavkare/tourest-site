import React from "react";

export default function Hero() {
  return (
    <section
      className="section hero"
      style={{
        backgroundImage:
          "url('src/assets/images/hero-bg-bottom.png'), url('src/assets/images/hero-bg-top.png')",
      }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">Explore Your Travel</p>
          <h2 className="hero-title">Trusted Travel Agency</h2>
          <p className="hero-text">
            I travel not to go anywhere, but to go. I travel for travel's sake
            the great affair is to move.
          </p>
          <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
        <figure className="hero-banner">
          <img
            src="src/assets/images/smiley-woman-posing-her-baggage-fotor-bg-remover-20230523161.png"
            width="1000"
            height="1200"
            loading="lazy"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
}
