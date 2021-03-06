import React from 'react';
import { useSelector } from 'react-redux'

import '../styles/imageDescriptionCard.css';

const ImageDescriptionCard = _ => {
  const { showPictureName, showPictureDesc } = useSelector(state => state.pictures) 

  return (
    <div id="ImageDescriptionCard" style={{ height: '340px', border: 'none', borderRadius: 16, marginTop: 32, padding: 32 }}>
      <h3>{ showPictureName }</h3>
      <p className="description-para">{ showPictureDesc }</p>
    </div>
  );
};

export default ImageDescriptionCard;
