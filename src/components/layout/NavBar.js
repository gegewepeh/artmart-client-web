import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import path from '../../routers/index.js';
import logo from '../../assets/images/img_logoC.svg';
import { logout, getUserByID } from '../../utils/store/actions/userAction.js';

import '../../styles/navbar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const { user, isLoading, errors } = useSelector(state => state.user);

  const handleLogout = _ => {
    dispatch(logout());
    return history.push(path.home);
  };

  useEffect(() => {
    dispatch(getUserByID(localStorage.getItem('id')))
  }, [dispatch])

  // if (isLoading) return '';

  return (
    <nav id="NavBar" className="navbar navbar-light bg-light sticky-top" style={pathname === path.loginCustomer || pathname === path.loginArtist || pathname === path.registerCustomer || pathname === path.registerArtist ? { display: 'none' } : { display: 'block' }}>
      <div className="container-fluid" style={{ paddingRight: 64, paddingLeft: 64 }}>
        <div className="navbar-brand">
          <Link to={path.home} >
            <img src={logo} alt="logo" height="30" />
          </Link>
        </div>
        <form style={{ flex: 3 }}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '100%', borderRadius: 8 }} />
        </form>

        <div className="d-flex">
          <Link to={path.loginCustomer}>
            <button className="btn btn-link" type="button" style={!localStorage.getItem('access_token') ? { marginLeft: 16, marginRight: 16, textDecoration: 'none', fontWeight: 500, borderRadius: 8 } : { display: 'none' }}>Login</button>
          </Link>
          <Link to={path.registerCustomer}>
            <button className="btn btn-primary" type="button" style={!localStorage.getItem('access_token') ? { borderRadius: 8 } : { display: 'none' }}>Get Started</button>
          </Link>
        </div>

        <div className="dropdown" style={!localStorage.getItem('access_token') ? { display: 'none' } : { display: 'block' }}>
          <div
            className="d-flex user-btn"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            role="button"
          >
            <img src={user?.profilePicture} style={{ borderRadius: '2.5rem', width: 32, height: 32, objectFit: 'cover' }} />
          </div>

          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li>
              <div className="dropdown-item text-center disabled" style={{ width: 'inherit' }}>
                <img src={user?.profilePicture} style={{ borderRadius: '2.5rem', margin: '16px auto', width: 48, height: 48, objectFit: 'cover' }} />
                <h6 style={{ margin: 0, fontSize: 16, color: '#202124' }}>{user?.username}</h6>
                <p style={{ marginBottom: 16 }}>{user?.email}</p>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-danger btn-sm text-center" style={{ borderRadius: '2.5rem', marginBottom: 16 }} onClick={() => handleLogout()}>Logout</button>
              </div>
            </li>
            <div className="nav-drop">
              <li><hr className="dropdown-divider" /></li>
              <Link to={localStorage.getItem('role') === 'artist' ? `/artist/${user?.id}` : `/user/${user?.id}`} style={{ textDecoration: 'none' }}>
                <li className="dropdown-item">
                  <p className="dropdown-item text " style={{ marginBottom: 0 }} >My Profile</p>
                </li>
              </Link>
            </div>
          </ul>
        </div>

      </div>
    </nav >
  )
}

export default NavBar