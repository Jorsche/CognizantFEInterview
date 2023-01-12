import React from "react";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import desktop from "../images/image-hero-desktop.png";
import mobile from "../images/image-hero-mobile.png";
import "./Article.css";
const Article = () => {
  return (
    <section className="sectionDiv">
      <article className="article">
        <div>
          <h1 className="remoteWorkHeading">Make remote work</h1>
          <p className="paragraphText">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="learnMoreButton">Learn more</button>
        </div>

        <ul className="unorderedListPartner">
          <li>
            <img src={databiz} alt="" className="partnerImg" />
          </li>
          <li>
            <img src={audiophile} alt="" className="partnerImg" />
          </li>
          <li>
            <img src={meet} alt="" className="partnerImg" />
          </li>
          <li>
            <img src={maker} alt="" className="partnerImg" />
          </li>
        </ul>
      </article>

      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" className="imgWidthFull hero-img" />
        </picture>
      </article>
    </section>
  );
};

export default Article;
