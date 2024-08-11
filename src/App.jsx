import React from 'react';
import './App.css';
import Header from './components/Header';
import RecruitmentSystem from './components/RecruitmentSystem';
import RecruitmentStrategy from './components/RecruitmentStrategy';
import PersonnelTrainingSystem from './components/PersonnelTrainingSystem';
import TeamSection from './components/TeamSection';
import EvaluationSection from './components/EvaluationSection';
import CaseGallery from './components/CaseGallery';
import ITSpecialists from './components/ITSpecialists';
import DigitalMarketers from './components/DigitalMarketers';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
// import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="App">
      <Header/>
     <RecruitmentSystem/>
    <RecruitmentStrategy/>
    <PersonnelTrainingSystem/>
    <TeamSection/>
    <EvaluationSection/>
    <CaseGallery/>
    <ITSpecialists/>
    <DigitalMarketers/>
    <ExperienceSection/>
  <Footer/>
     {/* <BackgroundAnimation/>  */}
    </div>
  );
}

export default App;
