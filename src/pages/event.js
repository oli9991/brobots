import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../layout/layout';
import { events } from '../static_data/events';
import styles from '../styling/event.module.scss';
import Slider from 'react-slick';

const Event = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  const event = events.find(
    event => event.key === location.pathname.split('/')[2]
  );

  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // autoplay: true,
    // autoplaySpeed: 2000
  };
  return (
    <Layout>
      <div className={styles.page}>
        <h1>{event.title}</h1>
        <p className={styles.location}>
          {event.location}, {event.date}
        </p>
        {/* <div className={styles.slideshow}>
          <Slider {...settings}>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
          </Slider>
        </div> */}
        <p>{event.description}</p>
      </div>
    </Layout>
  );
};

export default Event;
