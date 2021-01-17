import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from '../styling/layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
