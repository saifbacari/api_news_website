import { useState } from 'react';


function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState("")
  const [errorFound, setErrorFound] = useState("")



  const searchNewsHandler = (e) => {
    setSearch(e.target.value)
  }



  async function fetchNewsHandler() {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_31698a70fdcc0fd3a35a70d96a05fc6e34a3b&q=${search}&country=fr`);
    const data = await response.json();
    try {
    const dataGathered = data.results.map((newsData) => {
      return {
        title: newsData.title,
        description: newsData.description,
       };
    });

    setNews(dataGathered)
  } catch(error) {
    setErrorFound(error.message)
    console.log(errorFound)
  }

   
}  






  return (
    <>
    {news.map((item,index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))

    }
    <input onChange={searchNewsHandler} />
    <button onClick={fetchNewsHandler}>Fetch Data</button>
    </>
  )
}

export default App
