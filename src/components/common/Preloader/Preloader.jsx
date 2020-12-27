import React from 'react';
import preloader from '../../../assets/images/Spinner-1s-300px.svg';

let Preloader = (props) => {
   return <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} alt='preloader' />
   </div>
}

export default Preloader;