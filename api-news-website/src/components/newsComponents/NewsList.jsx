import styles from './newsList.module.css';

import NewsItem from './NewsItem';

const NewsList = (props) => {
    return (
                    <div className={styles.resultsList}>
                        <ul className={styles.listItem}>
                            {props.news.map((item) => (
                                <NewsItem
                                key={item.id}
                                source={item.source}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                publishedAt={item.publishedAt}
                                />
                            ))}
                        </ul>

                    </div>

            

    )
}

export default NewsList;