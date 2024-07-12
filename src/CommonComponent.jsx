import React from "react";
import "./App.css";

// eslint-disable-next-line react/prop-types
export const CommonComponent = ({ img, about = false }) => {
  return (
    <div className="container">
      <div className="left-container">
        <img
          src={img}
          alt=""
          width={400}
          height={400}
          style={{ borderRadius: "10px" }}
        />
        <div className="left-container-text">
          <h4>Come and visit us</h4>
          <p>(414) 857 - 0107</p>
          <p>happytummy@restaurant.com</p>
          <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
        </div>
      </div>
      <div className="right-container">
        <h4>We provide healthy food for your family.</h4>
        <h6>
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </h6>
        <p>
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        {
            about && <button className="btn">About Us</button>
        }
      </div>
    </div>
  );
};
