import styles from './newsList.module.css';

import NewsItem from './NewsItem';

const NewsList = (props) => {
    return (
                    <ul className={styles.listItem}>
                    {props.news.map((item) => (
                        <NewsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        />
                    ))}
                    </ul>
    )
}

export default NewsList;