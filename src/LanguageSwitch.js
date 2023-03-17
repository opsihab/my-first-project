import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import en from './en.json';
import bn from './bn.json';

function LanguageSwitch() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en';
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [location]);

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    navigate('/', { replace: true }); // Refresh the current page to apply language changes
  };

  const { button } = language === 'en' ? en : bn;

  return (
    <button onClick={handleLanguageSwitch}>{button}</button>
  );
}

export default LanguageSwitch;
