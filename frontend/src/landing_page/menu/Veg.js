import React from 'react';

const Veg = () => {
  return (
    <div className="container text-center pt-5 mt-5" style={{ paddingTop: "100px" }}> 
      {/* Adding extra padding for navbar space */}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src="/media/images/veg1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <img src="/media/images/veg2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <img src="/media/images/veg3.jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Veg;
