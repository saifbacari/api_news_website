import { useState } from "react";
import NewsList from "./NewsList";
import Searchbar from "../searchbar/searchbar";
import styles from "./newsDataFetcher.module.css";

const NewsDataFetcher = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  //mettre cette partie sous custome Hook
  const searchNewsHandler = (e) => {
    setSearch(e.target.value);
  };
  //fin

  //integrer sous custom Hook
  async function fetchNewsHandler() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=9790d6f530c648bb9ab9194543ed050f`
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
