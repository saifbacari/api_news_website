import React from 'react';
import Card from './components/cards/Card';
import styles from './components/cards/card.module.css';
import NewsFetcher from './components/newsComponents/NewsDataFetcher';

function App() {


  return (
      <React.Fragment>
        <Card className={styles.card}>
        <NewsFetcher/>
        </Card>
      </React.Fragment>


  );
}

export default App;
