import Layout from '../layout/layout';
import robotel from '../assets/Robotel2.svg';
import styles from '../styling/home.module.scss';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  document.title = 'BroBots - Home';
  return (
    <Layout>
      <div className={styles.text}>
        <ReactTypingEffect
          displayTextRenderer={(text, i) => {
            return (
              <h1 key={i}>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{ fontFamily: 'Zekton', fontSize: '2em' }}
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
          text={['Bringing the future closer.']}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.image}>
        <img src={robotel} alt='robotel' />
      </div>
    </Layout>
  );
};

export default Home;
