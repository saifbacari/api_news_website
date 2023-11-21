import moment from "moment";
import config from "../../../appConfig";
import { useEffect, useState } from "react";

const useHandleCategorieChange = (initialCategorie)=> {
    const [categorie, setCategorie] = useState(initialCategorie);
    const [news, setNews] = useState([])
    const apiKey = config.API_KEY;

    useEffect(() => {
        setCategorie(initialCategorie);
        console.log(initialCategorie);
        const fetchData = async () => {
            
            //attention check si ça passe le setcategorie
        try{
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?country=us&category=${categorie}&apiKey=${apiKey}`
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
        fetchData();
    }, [initialCategorie, categorie, apiKey]
    )


      return { categorie, news }
      }


export default useHandleCategorieChange