import React from 'react';
import './ITSpecialists.scss';
import Frame1 from '../assets/images7/1.svg';
import Frame2 from '../assets/images7/2.svg';
import Frame3 from '../assets/images7/3.svg';
import Frame4 from '../assets/images7/4.svg';
import Group24 from '../assets/images7/Group 24.svg';

const ITSpecialists = () => {
  return (
    <div className="it-specialists ">
      <div className=''>
      <div className="row justify-content-center contSp">
        <div className="col-12 col-md-6 col-lg-5 SELECTION1">
          <h6>CASE</h6>
          <h3>SELECTION OF IT SPECIALISTS</h3>
          <p>Objective: Select and train promising IT engineers</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 tools">
          <h6>TOOLS:</h6>
          <ul>
            <li>- IT specialists’ qualification assessment system</li>
            <li>- Personnel reserve selection system</li>
            <li>- Candidate training system</li>
            <li>- New employee support system</li>
          </ul>
        </div>
      </div>
      <div className="row statistics justify-content-center someCards2">
        <div className="row justify-content-center mt-5 someCards">
          <div className="col-12 col-md-3 mb-4 " >
            <img src={Frame1} alt="Card 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img src={Frame2} alt="Card 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img src={Frame3} alt="Card 3" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-12 col-md-3 mb-4">
            <img src={Frame4} alt="Card 4" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
        <div className="col-12 stat-item2 Group24">
          <img src={Group24} alt="Group 24" className=" Group24Img" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ITSpecialists;
