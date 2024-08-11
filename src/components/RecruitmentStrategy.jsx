import React from 'react';
import './RecruitmentStrategy.scss';
import strategyImage from '../assets/images3/HR_PSD20 1.svg'; // Зображення, яке ви завантажили

const RecruitmentStrategy = () => {
  return (
    <section className="recruitment-strategy container-fluid">
      <div className="recruitment-strategy__content">
        <div className="recruitment-strategy__text">
          <h2>Recruitment and Adaptation Strategy</h2>
          <ul>
            <li>A comprehensive HR strategy from HR and business analytics specialists.</li>
            <li>Solving recruitment and corporate culture problems with the help of SMM tools.</li>
            <li>Streamlined process of recruitment and adaptation of personnel.</li>
            <li>More than 75,000 best digital specialists in our database.</li>
            <li>Candidates are trained according to the world's best personnel training systems and have practical, highly qualified experience.</li>
          </ul>
        </div>
        <div className="recruitment-strategy__image">
          <img src={strategyImage} alt="Strategy" />
        </div>
      </div>
    </section>
  );
};

export default RecruitmentStrategy;
