import { useState, useEffect } from "react";
import moment from "moment";
import config from "../../../appConfig";

const fetchData = async (searchQuery = '', category = '') => {
  const apiKey = config.API_KEY;
  let dataGathered = [];

  try {
    if (!searchQuery && category) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      );
      const data = await response.json();
      dataGathered = data.articles.map((newsData) => {
        const formattedDate = moment(newsData.publishedAt)
          .startOf("day")
          .fromNow();
        return {
          id: Math.random(),
          source: newsData.source.name,
          urlToImage: newsData.urlToImage,
          title: newsData.title,
          url: newsData.url,
          publishedAt: formattedDate,
        };
      });
    } else if (searchQuery && !category) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`
      );
      const data = await response.json();
      dataGathered = data.articles.map((newsData) => {
        const convertedDate = moment(newsData.publishedAt)
          .startOf("day")
          .fromNow();
        return {
          id: Math.random(),
          source: newsData.source.name,
          urlToImage: newsData.urlToImage,
          title: newsData.title,
          description: newsData.description,
          url: newsData.url,
          publishedAt: convertedDate,
        };
      });
    }
  } catch (error) {
    console.log("Erreur récupération DATA", error);
  }

  return dataGathered;
};

const useFetchNewsHandler = (searchQuery = '', category = '') => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState(searchQuery);
  const [isSearched, setIsSearched] = useState(false);

  const fetchDataAndSetNews = async (searchQuery, category) => {
    const data = await fetchData(searchQuery, category);
    setNews(data);
    setIsSearched(true);
  };

  const searchNewsHandler = (event) => {
    setSearch(event.target.value);
    setIsSearched(false);
  };

  if (searchQuery !== search) {
    setSearch(searchQuery);
    setIsSearched(false);
  }

  useEffect(() => {
    fetchDataAndSetNews(search, category);
  }, [search, category]);

  return { isSearched, searchQuery, search, news, searchNewsHandler };
};

export default useFetchNewsHandler;
