import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isReady, setReady]=useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setReady(true);
    })
  }, []);
  return (
    <div className={`splash-container ${isReady? 'is-ready':''} `}>
      <div>
            <h4 className="splash-title">Dbmenos</h4>
            <h4 className="splash-subtitle">Challenge</h4>
      </div>

      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  )
};

export default SplashScreen;