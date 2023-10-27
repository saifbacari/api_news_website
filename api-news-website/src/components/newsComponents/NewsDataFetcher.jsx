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
      `https://newsdata.io/api/1/news?apikey=pub_31698a70fdcc0fd3a35a70d96a05fc6e34a3b&q=${search}&country=fr`
    );
    const data = await response.json();
    const dataGathered = data.results.map((newsData) => {
      return {
        id: Math.random(),
        title: newsData.title,
        description: newsData.description,
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
