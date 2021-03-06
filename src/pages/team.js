import React from 'react';
import Layout from '../layout/layout';
import styles from '../styling/team.module.scss';
import { team } from '../static_data/team';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { alumni } from '../static_data/alumni';

const Team = () => {
  const location = useLocation();
  const { pathname } = location;
  const data = pathname === '/alumni' ? alumni : team;

  document.title = `BroBots - ${pathname === '/alumni' ? 'Alumni' : 'Team'}`;
  return (
    <Layout>
      <div className={styles.container}>
        {data.length > 0 &&
          data.map((human, id) => (
            <div key={id} className={styles.card}>
              <div className={styles.background}>
                {human.img && <img src={human.img} alt={`${human.name}`} />}
                <div className={styles.media} />
                <div className={styles.contact}>
                  <div className={styles.links}>
                    {human.instagram && (
                      <a
                        href={human.instagram}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {human.facebook && (
                      <a href={human.facebook} target='_blank' rel='noreferrer'>
                        <FaFacebook />
                      </a>
                    )}
                    {human.github && (
                      <a href={human.github} target='_blank' rel='noreferrer'>
                        <FaGithub />
                      </a>
                    )}
                    {human.email && (
                      <a
                        href={`mailto:${human.email}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <MdMail />
                      </a>
                    )}
                  </div>
                  {human.phone && <p>{human.phone}</p>}
                </div>
              </div>
              <div className={styles.info}>
                <h4>{human.name}</h4>
                <p>{human.description}</p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Team;
