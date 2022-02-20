import React from 'react';
import Lottie from 'react-lottie';
import figma from '../../assets/animations/figma.json'
export const Animation =({anime})=>{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return(
        <Lottie
       
        width= {90}
        height={ 90}
        options={defaultOptions}
        />
    )


}
export default Animation;
