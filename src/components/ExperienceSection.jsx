import React from 'react';
import './ExperienceSection.scss';
import img1 from '../assets/images10/1.svg';  
import img2 from '../assets/images10/2.svg';  
import img3 from '../assets/images10/3.svg'; 

import arrow1 from '../assets/images10/Arrow 1 (Stroke).svg';
import arrow2 from '../assets/images10/Arrow 2 (Stroke).svg';

const ExperienceSection = () => {
  return (
    <div className="experience-section">
        <h6 className='Text1'>TIME-TESTED EXPERIENCE</h6>
        <h2 className='Text0'>COMMUNITY OF EXPERTS</h2>
      <div className="item">      
        <div className="circle Circle1">
          <img src={img1} alt="Circle 1 " className='.img-fluid' />
          <p>3800 BEST EXPERTS FROM DIFFERENT NICHES.</p>
        </div>
      </div>

      <div className="arrow-icon arrow1">
        <img src={arrow1} alt="Arrow Icon 1"className='.img-fluid' />
      </div>

      <h2 className='Text2'>EFFECTIVE WORK WITH PERSONNEL</h2>

      <div className="item">
  <div className="circle Circle2">
          <img src={img2} alt="Circle 2 "className='.img-fluid' />
          <p>MORE THAN 1500 SUCCESSFUL HIRES.</p>
        </div>
      </div>

      <div className="arrow-icon arrow2">
        <img src={arrow2} alt="Arrow Icon 2"className='.img-fluid' />
      </div>
      
      <h2 className='Text3'>AGENCY ON THE INTERNATIONAL MARKET</h2>

      <div className="item">
       
        <div className="circle Circle3">
          <img src={img3} alt="Circle 3" className='.img-fluid' />
          <p>MORE THAN 4.5 YEARS OF EXPERIENCE.</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
