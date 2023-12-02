import React from 'react'
import CustomSlider from '../components/slider/CustomSlider'
import CssSlider from '../components/slider/CssSlider'

const Slider = () => {
  return (
    <>
      <CustomSlider />
      <div className='py-12'>
        <CssSlider />
      </div>
    </>
  );
}

export default Slider