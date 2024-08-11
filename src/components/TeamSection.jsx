import React from 'react';
import { Parallax } from 'react-parallax';
import './TeamSection.scss';
import paralaxImage from '../assets/images5/Paralax.svg'; // Зображення, яке ви завантажили

const TeamSection = () => {
  return (
    <section className="team-section">
      <Parallax bgImage={paralaxImage} strength={300} bgImageAlt="Parallax Background">
        <div style={{ height: '530px' }}>
       
        </div>
      </Parallax>
    </section>
  );
};

export default TeamSection;
