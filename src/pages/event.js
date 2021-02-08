import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../layout/layout';
import { events } from '../static_data/events';
import styles from '../styling/event.module.scss';

const Event = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  const event = events.find(
    event => event.key === location.pathname.split('/')[2]
  );
  return (
    <Layout>
      <div className={styles.page}>
        <h1>{event.title}</h1>

        <p className={styles.location}>
          {event.location}, {event.date}
        </p>
        <p>{event.description}</p>
      </div>
    </Layout>
  );
};

export default Event;
