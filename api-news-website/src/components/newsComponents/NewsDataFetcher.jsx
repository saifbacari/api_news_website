import { useState,useEffect } from "react";
import NewsList from "./NewsList";
import Searchbar from "../searchbar/searchbar";
import styles from "./newsDataFetcher.module.css";
import config from "../../../appConfig";
import ListTopics from "../UI/ListTopics";
import moment from "moment";


const NewsDataFetcher = () => {
  const [news, setNews] = useState([]);

  const [search, setSearch] = useState('');
  const [isSearched, setIsSearched] = useState(false)
 const [categorie, setCategorie] = useState('');

 
  const apiKey = config.API_KEY;

  const searchNewsHandler = (event) => {
    setSearch('')
    setSearch(event.target.value);
    setIsSearched(true)
  }

  useEffect(() => {
    
      }, [categorie, search]);

  const handleCategorieChange = async (newCategorie) => {
    setSearch('')
    try{
      setCategorie(newCategorie);

      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${newCategorie}&apiKey=${apiKey}`
      );
      const data = await response.json();
      const dataGathered = data.articles.map((newsData) => {
        const formmattedDate = moment(newsData.publishedAt).startOf('day').fromNow();
        return {
          id: Math.random(),
          source: newsData.source.name,
          urlToImage: newsData.urlToImage,
          title: newsData.title,
          url: newsData.url,
          publishedAt: formmattedDate,
        };
      });
      setNews(dataGathered);
    
    } catch (error){
      console.log("Erreur récupération DATA")
    
  }
  }


  const fetchNewsHandler = async () => {
      if(isSearched){
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`
  
        );
        const data = await response.json();
        const dataCategorieGathered = data.articles.map((newsData) => {
          const convertedDate = moment(newsData.publishedAt).startOf('day').fromNow();
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
        setNews(dataCategorieGathered);  
      }
  }

  //const { news } = useFetchNewsHandler()

  return (
    <>
      <div className={styles.searchComponent}>
         <ListTopics onCategoryChange={handleCategorieChange} onFetch={handleCategorieChange} />
        <Searchbar
          onSearch={searchNewsHandler}
          onFetch={fetchNewsHandler}
          className={styles.searchBar}
          value={categorie}
        />
      </div>
       <NewsList news={news}  />
    </>
  );
};

export default NewsDataFetcher;


