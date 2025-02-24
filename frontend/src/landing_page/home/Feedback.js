import React from "react";
import './Feedback.css'
const Feedback = () => {
  return (
    <div>
      <div className="container d-flex bg-dark bg-opacity-50 justify-content-center align-items-center vh-50">
      
     
      
     
        <div className="text-container row text-center mt-5 mb-5">
          <h1>Why Choose Us?</h1>
          <p>
            <strong>Vaaraahi Caterers</strong> has over <strong>30 years of experience</strong> in the food catering industry in <strong>Hyderabad, Telangana</strong>. 
            We specialize in providing <strong>high-quality catering services</strong> near <strong>KPHB, Kukatpally, and Gachibowli</strong>, ensuring 
            that your events are complemented with <strong>delicious and hygienic meals</strong>. Our philosophy is simple: 
            <strong>"Good Food Builds Good Relations."</strong>
          </p>

          <div className="d-flex justify-content-center gap-5 mt-5">
            <div className="col-6">
              <img
                src="/media/images/chef.webp"
                alt="Vegetarian Dish"
                className="img-fluid rounded shadow-lg"
                style={{ width: "60%", objectFit: "cover" }}
              />
            </div>

            <div className="col-6 text-start">
              <p>
                At <strong>Sri Sai Caterers</strong>, we take pride in being one of the <strong>premium outdoor catering services</strong> in <strong>Hyderabad</strong>. 
                Located near <strong>Pipeline Road, Suchitra</strong>, our services extend to major areas such as <strong>Kompally, Alwal, Bowenpally, and beyond</strong>. 
                Whether you're hosting an <strong>intimate family gathering</strong> or a <strong>large corporate event</strong>, our catering team ensures a <strong>seamless dining experience</strong>.
              </p>

              <p>
                We offer <strong>customizable buffet setups</strong> tailored to your preferences, featuring a <strong>wide range of cuisines</strong>, including 
                <strong>vegetarian and non-vegetarian dishes, live food stations, exotic desserts, chaats, ice creams, and more</strong>. 
                Our expertise extends to catering for <strong>corporate functions, engagement ceremonies, weddings, birthday parties, anniversaries, 
                housewarming events, and cultural celebrations</strong>.
              </p>

              <p>
                From carefully crafted <strong>welcome drinks</strong> to extravagant <strong>non-vegetarian feasts</strong>, our catering packages are designed 
                to suit your budget without compromising on <strong>quality</strong>. Our team of <strong>skilled chefs</strong> ensures that every dish is prepared 
                with <strong>fresh ingredients, authentic flavors, and impeccable presentation</strong>.  
                <strong>We don't just serve food; we create an experience.</strong>
              </p>

              <p>
                <strong>Ready to make your event unforgettable?</strong> Contact us today and let us bring the best of our <strong>catering services</strong> to your <strong>special occasion</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
