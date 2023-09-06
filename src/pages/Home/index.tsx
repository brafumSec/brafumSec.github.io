import About from './About';
import Awards from './Awards';
import Intro from './Intro';
import Publications from './Publications';
import Topbar from './Topbar';
import Acknowledgements from './Acknowledgements/Acknowledgements';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className="content" style={{ marginTop: 0 }}>
        <Intro />
        <About />
        <Publications />
        <Awards />
        <Acknowledgements/>
      </div>
    </div>
  );
};

export default HomePage;
