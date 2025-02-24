import React, { useEffect, useState } from "react";
import "./Stats.css";

const statsData = [
  { icon: "👨‍🍳", number: 30, label: "Professional Chefs" },
  { icon: "🍔", number: 453, label: "Culinary Options" },
  { icon: "🍽️", number: 10, label: "Years Of Experience" },
  { icon: "🍕", number: 100000, label: "Satisfied Customers" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const steps = 50; // Total updates
    const increment = Math.ceil(target / steps);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const Stats = () => {
  return (
    <div className="stats-container bg-dark bg-opacity-50 mt-2 mb-2">
    
      
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">
            <Counter target={stat.number} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
