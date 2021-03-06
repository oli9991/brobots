import React from 'react';
import styles from '../styling/layout.module.scss';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <img src={logo} alt='logo' />
      <div className={styles.links}>
        <Link
          className={location.pathname === '/' ? styles.active : styles.normal}
          to='/'
        >
          {location.pathname === '/' && <FaRobot />}
          Home
        </Link>
        <Link
          className={
            location.pathname === '/team' ? styles.active : styles.normal
          }
          to='/team'
        >
          {location.pathname === '/team' && <FaRobot />}
          Team
        </Link>
        <Link
          className={
            location.pathname === '/alumni' ? styles.active : styles.normal
          }
          to='/alumni'
        >
          {location.pathname === '/alumni' && <FaRobot />}
          Alumni
        </Link>
        <div className={styles.events}>
          <Link
            className={
              location.pathname.includes('/events')
                ? styles.active
                : styles.normal
            }
          >
            {location.pathname.includes('/events') && <FaRobot />}
            Events
          </Link>
          <div className={styles.menu}>
            <Link className={styles.normal} to='/events/media'>
              Media
            </Link>
            <Link className={styles.normal} to='/events/demos'>
              Demo
            </Link>
            <Link className={styles.normal} to='/events/'>
              Others
            </Link>
          </div>
        </div>
        <Link
          className={
            location.pathname === '/results' ? styles.active : styles.normal
          }
          to='/results'
        >
          {location.pathname === '/results' && <FaRobot />}
          Results
        </Link>
        <Link
          className={
            location.pathname === '/contact' ? styles.active : styles.normal
          }
          to='/contact'
        >
          {location.pathname === '/contact' && <FaRobot />}
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
