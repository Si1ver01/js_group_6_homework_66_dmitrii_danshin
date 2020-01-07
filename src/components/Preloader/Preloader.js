import React from 'react';
import Loader from 'react-loader-spinner';
import './Preloader.scss'


const Preloader = () => {
  return (
    <div className='Preloader'>
      <Loader type="BallTriangle" color="#2BBBAD" height={120} width={120} />
    </div>
  )
}

export default Preloader
