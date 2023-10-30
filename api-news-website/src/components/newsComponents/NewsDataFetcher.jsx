import { useState } from "react";
import NewsList from "./NewsList";
import Searchbar from "../searchbar/searchbar";
import styles from "./newsDataFetcher.module.css";
import config from "../../../appConfig";

const NewsDataFetcher = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const apiKey = config.API_KEY;


  //mettre cette partie sous custome Hook
  const searchNewsHandler = (e) => {
    setSearch(e.target.value);
  };
  //fin

  //integrer sous custom Hook
  async function fetchNewsHandler() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`
    );         
    const data = await response.json();
    const dataGathered = data.articles.map((newsData) => {
      return {
        id: Math.random(),
        source: newsData.source.name,
        urlToImage: newsData.urlToImage,
        title: newsData.title,
        description: newsData.description,
        url: newsData.url,
        publishedAt: newsData.publishedAt,
      };
    });
    setNews(dataGathered);
  }
  //fin
  return (
    <>
      <div className={styles.searchComponent}>
        <Searchbar
          onSearch={searchNewsHandler}
          onFetch={fetchNewsHandler}
          className={styles.searchBar}
        />
      </div>
      <NewsList news={news} />
    </>
  );
};

export default NewsDataFetcher;
