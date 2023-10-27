import styles from './App.css';
import NewsDataFetcher from './components/newsComponents/NewsDataFetcher';
import Navbar from './components/UI/Navbar';

function App() {


  return (
      <>
        <div className={styles.app}>
          <Navbar />
          <NewsDataFetcher/>
        </div>
      </>
  );
}

export default App;
