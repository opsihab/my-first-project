import React, { useState, useEffect } from 'react';
import EnglishAll from './English/EnglishAll';
import BanglaAll from './Bangla/BanglaAll';
import './index.css'


function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'english');

  const handleLanguageToggle = () => {
    if (language === 'english') {
      setLanguage('bangla');
      localStorage.setItem('language', 'bangla');
    } else {
      setLanguage('english');
      localStorage.setItem('language', 'english');
    }
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <div>
      <header>
<div class="container">
  <div class="col">
  </div>
  <div class="col">
  <div className='ttp'>
    <h2 className='title-ttp'>TTP - টাইনা টুইন পাশ।</h2>
     </div>
  </div>
  <div class="col">
     
  <div className='language'>
    
    <button onClick={handleLanguageToggle}>
      
      {language === 'english' ? 'বাংলা' : 'English'}
    </button>
    
    </div>
  </div>
</div>
</header>



     
      {language === 'english' ? (
        <div>
          <EnglishAll />
      
        </div>
      ) : (
        <div>
          
          <BanglaAll />
        </div>
        
      )}
    </div>
  );
}

export default App;
