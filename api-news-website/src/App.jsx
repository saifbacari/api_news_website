import { useState } from 'react';


function App() {
  const [news, setNews] = useState([])

  async function fetchNewsHandler() {
    const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_31698a70fdcc0fd3a35a70d96a05fc6e34a3b&q=atos&country=fr');
    const data = await response.json();

    const titleGathered = data.results.map((title) => setNews(title.title))
   
   return titleGathered;
  }
  console.log(news)

  return (
    <>
    <p>{news}</p>
    <button onClick={fetchNewsHandler}>Fetch Data</button>
    </>
  )
}

export default App
