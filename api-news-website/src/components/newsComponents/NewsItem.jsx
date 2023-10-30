import CardNewsItem from '../UI/CardNewsItem';
import styles from "./newsItem.module.css";

const NewsItem = (props) => {
  return (
      <CardNewsItem>
        <li>
          <img className={styles.imgArticle} src={props.urlToImage} />
          <h3 className={styles.nameMedia}>{props.source}</h3>
          <h4 className={styles.titleArticle}>{props.title}</h4>
          <p className={styles.descArticle}>{props.description}</p>
          <h5 className={styles.url}>{props.url}</h5>
          <h6 className={styles.datePublishing}>{props.publishedAt}</h6>
        </li>
      </CardNewsItem>

    
  );
};

export default NewsItem;
