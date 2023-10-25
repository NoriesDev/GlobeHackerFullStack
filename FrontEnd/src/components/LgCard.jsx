import "./Lg-Card-styling.css";
import PropTypes from "prop-types";

export default function LgCard({
  title,
  date,
  author,
  imageUrl,
  article,
  dining,
  adventures,
  shopping,
}) {
  return (
    <div className="Lg-container">
      <div className="Lg-rightCard">
        <h3 className="Lg-title"> {title} </h3>
        <div className="Lg-float">
          <p className="Lg-author"> {author} </p>
          <p className="Lg-date"> {date} </p>
        </div>
        <div className="Lg-article"> {article} </div>
      </div>
      <div className="Lg-Top-Section">
        <img className="Lg-img" src={imageUrl} alt="" />
        <ul className="LgList">
          <p className="li-title">You should:</p>
          <li className="li-items"> {dining} </li>
          <li className="li-items"> {adventures} </li>
          <li className="li-items"> {shopping} </li>
        </ul>
      </div>
    </div>
  );
}

LgCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  article: PropTypes.string,
  dining: PropTypes.string,
  shopping: PropTypes.string,
  adventures: PropTypes.string,
};
