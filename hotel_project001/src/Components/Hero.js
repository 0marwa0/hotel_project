import React from 'react';
import '../App.css'

function Hero({children,Hero}) {

   
  return (
   <header className={Hero}>
      {children}
   </header>
  );
}

export default Hero;
