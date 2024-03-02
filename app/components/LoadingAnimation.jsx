import React, { useState } from 'react';
const imgStyle = {
  width: '200px',
  height: '200px',
  position: 'absolute',
};

const loaderStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
};

const greetingStyle = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'lime',
  fontSize: '3rem',
  textAlign: 'center',
  width: '80%',
  fontWeight: 'bold',
};

export default function LoadingAnimation() {
  const [greeting, setGreeting] = useState('');


  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getHours();
      if (currentTime < 12) {
        setGreeting('Good Morning! <span style="color: #FFD700;">&#9728;</span>');
      } else if (currentTime < 18) {
        setGreeting('Good Afternoon! <span style="color: #FFD700;">&#9728;</span>');
      } else if (currentTime < 22) {
        setGreeting('Good Evening! 🌙');
      } else {
        setGreeting('Good Night! 🌜');
      }

    }, 300);


    return () => clearInterval(interval);
  }, []);


  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-zinc-900 z-50">
      <div style={imgStyle}>
        <img src="logo.png" alt="Loading" />
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-lime-400 h-12 w-12 mb-4" style={loaderStyle}></div>
      </div>
      <div style={greetingStyle} dangerouslySetInnerHTML={{ __html: greeting }} />
    </div>
  );
}