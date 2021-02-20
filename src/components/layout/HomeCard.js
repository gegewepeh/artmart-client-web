import React from 'react';

import image from '../../assets/images/placeholder/pla_Card.png'
import imageDP from '../../assets/images/placeholder/pla_DP.jpg'

const HomeCard = _ => {
  return (
    <div id="HomeCard" className="col-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 100, right: 8, borderRadius: 8 }}>
          <p style={{ textAlign: 'right', margin: 4, fontWeight: 600, color: '#ecf0f1' }}>★5.0</p>
          <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. 100.000</p>
        </div>
        <img src={image} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3" style={{ marginRight: 4 }}>
              <img
                src={imageDP}
                className="rounded-circle"
                style={{ width: 60, height: 60, objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-sm-8">
              <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Potato Style Draw</h5>
              <p className="card-text" >satomizu</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default HomeCard;
