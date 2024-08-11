import React from 'react';
import './PersonnelTrainingSystem.scss';
import qualificationImage from '../assets/images4/FrameOR 1.svg';
import trainingImage from '../assets/images4/FrameBl 1.svg';
import employmentImage from '../assets/images4/FrameBl 2.svg';
import supportImage from '../assets/images4/FrameBl 3.svg';
import Vector1 from '../assets/images4/Vector 1.svg';
import Vector2 from '../assets/images4/Vector 2.svg';
import Vector3 from '../assets/images4/Vector 3.svg';

const PersonnelTrainingSystem = () => {
    return (
        <section className="personnel-training">
            <div className='personnelH2'><h2>Personnel Training System</h2></div>
            <div className="personnel-training__content">
                <div>
                    <img src={qualificationImage} alt="Qualification" />
                    <img src={Vector1} alt="Vector1" className="Vectors Vector1" />
                </div>
                <div className='containerPersonnel'>
                    <div>
                        <img src={trainingImage} alt="Training" />
                        <img src={Vector2} alt="Vector2" className="Vectors" />
                    </div>
                    <div>
                        <img src={employmentImage} alt="Employment" />
                        <img src={Vector3} alt="Vector3" className="Vectors" />
                    </div>
                    <div>
                        <img src={supportImage} alt="Support" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonnelTrainingSystem;
