import React, { useState, useEffect } from "react";
import "./Review.css";

const reviews = [
  {
    text: "Lovely service by Vaaraahi Caterers. The food is amazing and the setup was beautiful...",
    name: "Md Raj",
  },
  {
    text: "Great experience! The food was delicious, and the service was top-notch...",
    name: "Aisha Khan",
  },
  {
    text: "One of the best catering services. Highly recommended...",
    name: "Umesh",
  },
  {
    text: "Great experience! The food was delicious, and the service was top-notch...",
    name: "Karthikeya",
  },
  {
    text: "One of the best catering services. Highly recommended...",
    name: "Abhi",
  }
];

const Review = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reviews-wrapper">
      <div className="review-container">
        <div className="review-content">
          <p className="quote">❝ {reviews[index].text} ❞</p>
          <p className="author">- {reviews[index].name}</p>
        </div>
        <div className="dots">
          {reviews.map((_, i) => (
            <span key={i} className={`dot ${i === index ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
