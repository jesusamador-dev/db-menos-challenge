import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isReady, setReady]=useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div className={ `splash-container ${isReady ? 'is-ready' : ''} ` }>
          <div className="splash-top">
            <h4 className="splash-title-top">Dbmenos</h4>
          </div>
          <div className="splash-bottom">
            <h4 className="splash-title-bottom">Challenge</h4>
          </div>
    </div>
  )
};

export default SplashScreen;