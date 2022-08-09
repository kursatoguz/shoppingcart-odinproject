import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = (stars) => {
  // const{rate,count} = stars;
  const rate = 4.2;
  const count = 82;
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rate > number ? (
          <BsStarFill />
        ) : rate > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="stars-container">
      <div className="stars">{tempStars}</div>
      <p className="reviews">({count} customer reviews)</p>
    </div>
  );
};
export default Stars;
