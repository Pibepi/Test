import React from 'react';
import './RecruitmentSystem.scss';
import AGENCySmall from '../assets/Нова папка/HR.svg'; // зображення для маленьких екранів
import AGENCyLarge from '../assets/images2/HR AGENCy.svg'; // зображення для великих екранів

const RecruitmentSystem = () => {
  return (
    <section className="recruitment-system">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="recruitment-systemH2">
              <h2>Recruitment System</h2>
            </div>
            <img className="AGENCyImg-small" src={AGENCySmall} alt="HR AGENCy Small" />
            <img className="AGENCyImg-large" src={AGENCyLarge} alt="HR AGENCy Large" />
          </div>
        </div>
        <div className="row recruitment-system__content justify-content-center container">
          <div className=" col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="recruitment-system__card">
              <p>Attracting qualified candidates</p>
            </div>
          </div>
          <div className=" col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="recruitment-system__card">
              <p>Training of candidates</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="recruitment-system__card">
              <p>Integration into the employer's corporate system</p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="recruitment-system__card">
              <p>Formation of corporate culture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSystem;
