import styles from './newsItem.module.css';


const NewsItem = (props) => {
    return (
        <div>
          <li className={styles.newsItem}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          </li>
        </div>
    )
}

export default NewsItem;
