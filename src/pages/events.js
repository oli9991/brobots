import React from 'react';
import Layout from '../layout/layout';
import styles from '../styling/event.module.scss';
import { events } from '../static_data/events';
import { Link } from 'react-router-dom';

const Events = () => {
  document.title = 'BroBots - Events';
  return (
    <Layout>
      <div className={styles.container}>
        {events.map((event, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.background}>
              <Link to={`/events/${event.key}`}>
                {event.cover && (
                  <img src={event.cover} alt={`${event.cover}`} />
                )}
              </Link>
            </div>
            <div className={styles.info}>
              <Link to={`/events/${event.key}`}>
                <h4>{event.title}</h4>
              </Link>

              <p className={styles.location}>{event.location}</p>
              <p>{event.description.slice(0, 100)}...</p>
            </div>
            <p className={styles.date}>{event.date}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Events;
