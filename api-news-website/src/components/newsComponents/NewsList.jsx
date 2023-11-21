import styles from './newsList.module.css';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
    const newsList = news || [];

    return (
        <div>
            {newsList.length > 0 ? (
                <ul className={styles.listItem}>
                    {newsList.map((item) => (
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
            ) : (
                <p className={styles.textListByDefault}>Bienvenue sur InfoNews</p>
            )}

            {news ? (
                <ul className={styles.listItem}>
                    {newsList.map((item) => (
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
            ) : (
                <p>No articles found in news</p>
            )}
        </div>
    );
};

export default NewsList;
