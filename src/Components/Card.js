import React from "react";
// import image1 from "../images/katie-zaferes.png";

export default function Card(props) {
  // console.log(props.openSpots);
  let badgeText;
  console.log("hello");
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) •</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
