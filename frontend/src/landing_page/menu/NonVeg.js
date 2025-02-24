import React from 'react';

const NonVeg = () => {
  return (
    <div className="container text-center pt-5 mt-5" style={{ paddingTop: "100px" }}> 
      {/* Adding extra padding for navbar space */}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={`${process.env.PUBLIC_URL}/media/images/NonVeg1.PNG`} className="img-fluid" alt="NonVeg1" />
        </div>
        <div className="col-md-4">
          <img src={`${process.env.PUBLIC_URL}/media/images/NonVeg2.PNG`} className="img-fluid" alt="NonVeg2" />
        </div>
        <div className="col-md-4">
          <img src={`${process.env.PUBLIC_URL}/media/images/NonVeg3.PNG`} className="img-fluid" alt="NonVeg3" />
        </div>
      </div>
    </div>
  );
};

export default NonVeg;
