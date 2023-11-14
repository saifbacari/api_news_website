import CardNewsItem from '../UI/CardNewsItem';
import styles from "./newsItem.module.css";

const NewsItem = (props) => {
  const websiteUrl = props.url;
  const website = websiteUrl.split('https://').pop().split('/')[0]
  return (
      <CardNewsItem>
        <li>
          <img className={styles.imgArticle} src={props.urlToImage} />
          <div className={styles.textNewsItem}>
            <div className={styles.logoSource}>
              <img className={styles.logoNews} src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=26`} alt={props.source.id}/>
              <h3 className={styles.nameMedia}>{props.source}</h3>
            </div>
            <h4 className={styles.titleArticle}>{props.title}</h4>
            <p className={styles.descArticle}>{props.description}</p>
            <a className={styles.url} href={props.url}>{props.url}</a>
            <h6 className={styles.datePublishing}>{props.publishedAt}</h6>
          </div>
        </li>
      </CardNewsItem>

    
  );
};

export default NewsItem;
