import React, { useEffect } from 'react';

const Motion = () => {
  useEffect(() => {
    const handleOrientation = (event) => {
      console.log('Device moved (orientation event)');
    };

    const handleMotion = (event) => {
      console.log('Device moved (motion event)');
    };

    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('devicemotion', handleMotion);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, []);

  return (
    <div>
      <h1>Move your device to see console logs</h1>
    </div>
  );
};

export default Motion;