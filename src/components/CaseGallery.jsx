import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CaseGallery.scss'; // Стилі для компонента

import phone1 from '../assets/images6/phone1.png';
import phone2 from '../assets/images6/phone2.png';
import phone3 from '../assets/images6/phone3.png';
import phone4 from '../assets/images6/phone4.png';
import phone5 from '../assets/images6/phone5.png';
import phone6 from '../assets/images6/phone6.png';

import case1 from '../assets/images6/case 1.svg';
import case2 from '../assets/images6/case 2.svg';

const phones = [
  { src: phone1, id: 'phone1' },
  { src: phone2, id: 'phone2' },
  { src: phone3, id: 'phone3' },
  { src: phone4, id: 'phone4' },
  { src: phone5, id: 'phone5' },
  { src: phone6, id: 'phone6' }
];

const CaseGallery = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const closeOverlay = () => {
    setSelectedPhone(null);
  };

  return (
    <div className="case-gallery-container">
      <div className="case-gallery">
        <div className="case-gallery__item1">
          <img src={case1} alt="Case 1" className='Case1' />
        </div>
        <div className="case-gallery__item2">
          <img src={case2} alt="Case 2" className='Case2' />
        </div>
        
        <div className="case-gallery__item-gallery">
          {phones.map((phone) => (
            <motion.div 
              key={phone.id} 
              className={`case-gallery__item ${phone.id} ${selectedPhone === phone.src ? 'active' : ''}`} 
              onClick={() => setSelectedPhone(phone.src)}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={phone.src} alt={phone.id} />
            </motion.div>
          ))}
        </div>

        <div className="text-block text-block--top">
          <div className="text-smm">SMM</div>
          <div className="text-cases">CASES</div>
          <div className="text-description">Business positioning system in social networks.</div>
        </div>

        <div className="text-block text-block--bottom">
          <div className="text-smm">SMM</div>
          <div className="text-cases">CASES</div>
          <div className="text-description">Business positioning system in social networks.</div>
        </div>

        <AnimatePresence>
          {selectedPhone && (
            <motion.div 
              className="selected-image-overlay" 
              onClick={closeOverlay}
              initial={{ opacity: 0, visibility: 'hidden' }}
              animate={{ opacity: 1, visibility: 'visible' }}
              exit={{ opacity: 0, visibility: 'hidden' }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={selectedPhone} 
                alt="Selected Phone" 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CaseGallery;
