import styles from './newsList.module.css';

import NewsItem from './NewsItem';

const NewsList = (props) => {
    return (
                 
                        <ul className={styles.listItem}>
                            {props.news.map((item) => (
                                <NewsItem
                                key={item.id}
                                source={item.source}
                                urlToImage={item.urlToImage}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                publishedAt={item.publishedAt}
                                />
                            ))}
                        </ul>

               

            

    )
}

export default NewsList;