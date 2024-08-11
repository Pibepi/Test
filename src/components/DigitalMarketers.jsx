import React from 'react';
import './DigitalMarketers.scss';
import N1 from '../assets/images8/N1.svg';
import N2 from '../assets/images8/N2.svg';
import N3 from '../assets/images8/N3.svg';
import N4 from '../assets/images8/N4.svg';
import w1 from '../assets/images8/w1.svg';
import w2 from '../assets/images8/w2.svg';
import w3 from '../assets/images8/w3.svg';
import Group46  from '../assets/images8/Group 46.svg';

const DigitalMarketers = () => {
    return (
        <div className="digital-marketers">
            <div className="TopHeader">
                <div className="headerDigital">
                    <h6>CASE</h6>
                    <h1>SELECTION OF DIGITAL MARKETERS</h1>
                </div>
                <div className="tools">
                    <h6>TOOLS:</h6>
                    <ul className='ulLII'>
                        <li>- Creating an HR Funnel</li>
                        <li>- Expert assessment of soft skills</li>
                        <li>- Analysis of compliance with business requirements</li>
                        <li>- Selection of relevant candidates</li>
                    </ul>
                </div>
            </div>

            <div className="socialCards">
                <div className="card1">
                    <img src={w1} alt="Social Marketing" />
                </div>
                <div className="card2">
                    <img src={w2} alt="Digital Marketing Specialist" />
                </div>
                <div className="card3">
                    <img src={w3} alt="Social Marketing" />
                </div>
            </div>
            <div className="statistics">
                <div className="stat-item1">
                    <img src={N1} alt="5700+ Responses N1" />
                </div>
                <div className="stat-item2">
                    <img src={N2} alt="1800+ Candidates N2" />
                </div>
                <div className="stat-item3">
                    <img src={N3} alt="650+ Selected N3" />
                </div>
                <div className="stat-item4">
                    <img src={N4} alt="650+ Selected N4"  />
                </div>
            </div>
         
        </div>
        
    );
};

export default DigitalMarketers;
