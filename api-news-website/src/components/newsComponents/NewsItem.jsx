import styles from './newsItem.module.css';


const NewsItem = (props) => {
    return (
        <div>
          <li className={styles.newsItem}>
          <h1>{props.source}</h1>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h5>{props.url}</h5>
          <h6>{props.publishedAt}</h6>
          </li>
        </div>
    )
}

export default NewsItem;
