import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../layout/layout';
import { events } from '../static_data/events';
import styles from '../styling/event.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const Event = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  const event = events.find(
    event => event.key === location.pathname.split('/')[2]
  );

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.primaryArea}>
          <h1>{event.title}</h1>
          <p className={styles.location}>
            {event.location}, {event.date}
          </p>
          <div className={styles.carousel}>
            <Carousel pause='false' touch>
              {event.images.length > 0 &&
                event.images.map((image, key) => (
                  <Carousel.Item interval={2000} key={key}>
                    <img
                      className='d-block w-100'
                      src={image}
                      alt='First slide'
                    />
                    <Carousel.Caption>
                      <h3>{event.title}</h3>
                      {/* <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <p className={styles.description}>{event.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Event;
