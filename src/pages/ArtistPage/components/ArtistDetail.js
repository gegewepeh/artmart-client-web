import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { getOtherUserId } from '../../../utils/store/actions/userAction.js';

import '../styles/ArtistDetail.css';
import path from '../../../routers/index.js';

const ArtistDetail = _ => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();

  const { otherUser, isLoading, errors } = useSelector(state => state.user);

  const role = pathname.split('/')[1];
  const id = Number(pathname.split('/')[2]);

  useEffect(() => {
    dispatch(getOtherUserId(role, id))
  }, [dispatch])

  if (isLoading) return '';

  return (
    <div id="ArtistDetail" style={{ marginTop: 32, paddingTop: 8, paddingBottom: 32 }} className="d-flex flex-column">
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }} className="align-self-center">
        <img
          src={otherUser?.profilePicture}
          className="circle"
        />
      </div>
      <h3 style={{ marginBottom: 0, marginTop: 24, textAlign: 'center' }}>{otherUser?.username}</h3>
      <p style={{ textAlign: 'center' }}>{otherUser?.email}</p>
      {/* <div className="d-flex align-self-center" >
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarHalf style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />
        <p style={{ margin: 0 }} className="align-self-center">4.5</p>
      </div> */}
      <button className="btn btn-outline-success w-100" style={Number(otherUser?.id) !== Number(localStorage.getItem('id')) ? { marginTop: 16, borderRadius: 8 } : { display: 'none' }}>Contact Me!</button>
      <button className="btn btn-outline-success w-100" style={Number(otherUser?.id) === Number(localStorage.getItem('id')) ? { marginTop: 16, borderRadius: 8 } : { display: 'none' }}>Edit Profile</button>
      <Link to={path.stallForm} style={{textDecoration: 'none'}}>
        <button className="btn btn-outline-success w-100" style={Number(otherUser?.id) === Number(localStorage.getItem('id')) ? { marginTop: 16, borderRadius: 8 } : { display: 'none' }}>Post an Art</button>
      </Link>
    </div>
  );
};

export default ArtistDetail;
