import React from 'react';
import Layout from '../layout/layout';
import style from '../styling/contact.module.scss';
import { FaFacebook, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const onSave = () => {
    copy('0729 064 637');
    toast('Saved to clipboard');
  };

  return (
    <Layout>
      <ToastContainer draggable hideProgressBar position='top-center' />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.group}>
            <a
              href='https://www.instagram.com/brobotsteam/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram /> @brobotsteam
            </a>
          </div>
          <div className={style.group}>
            <a
              href='https://www.facebook.com/brobotsteam//'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook /> BroBots Team
            </a>
          </div>
          <div className={style.group}>
            <a
              href='https://github.com/Andy3153/BroBotsFTC'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub /> BroBotsFTC
            </a>
          </div>
          <div className={style.group}>
            <p onClick={onSave}>
              <FaPhoneAlt /> {'0729 064 637'}
            </p>
          </div>
          <div className={style.group}>
            <a
              href='mailto://s_ianc@yahoo.com'
              target='_blank'
              rel='noreferrer'
            >
              <MdMail /> s_ianc@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
