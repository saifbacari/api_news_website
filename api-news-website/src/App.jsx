import './App.css';
import NewsDataFetcher from './components/newsComponents/NewsDataFetcher';
import Navbar from './components/UI/Navbar';

function App() {


  return (
      <>
        <div className="root">
          <Navbar />
          <NewsDataFetcher/>
        </div>
      </>
  );
}

export default App;
