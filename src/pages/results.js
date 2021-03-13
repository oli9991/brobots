import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/layout';
import styles from '../styling/results_styles.module.scss';
import { results } from '../static_data/results';
import Carousel from 'react-bootstrap/Carousel';

const Results = () => {
  document.title = 'BroBots - Results';
  return (
    <Layout>
      <div className={styles.container}>
        {results.map((event, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.info}>
              <Link to={`/events/${event.key}`}>
                <h4>{event.title}</h4>
              </Link>

              <p className={styles.location}>{event.location}</p>
              <p>{event.description}</p>
            </div>
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
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <p className={styles.date}>{event.date}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Results;
