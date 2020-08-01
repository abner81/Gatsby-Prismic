import React from "react";
import { Link } from "gatsby";

import { RichText } from "prismic-reactjs";

const HomepageBanner = ({ bannerContent }) => {
  const { title, description, link, linkLabel, background } = bannerContent;
  // https://prismic.io/docs/gatsby/getting-started-tutorials/convert-the-static-homepage-banner
  return (
    <section
      className="homepage-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${background.url})`,
      }}
    >
      <div className="banner-content container">
        <h2 className="banner-title">{RichText.asText(title)}</h2>
        <p className="banner-description">{RichText.asText(description)}</p>
        <Link to="/about" className="banner-button">
          {RichText.asText(linkLabel)}
        </Link>
      </div>
    </section>
  );
};

export default HomepageBanner;
