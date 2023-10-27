import styles from './newsList.module.css';

import NewsItem from './NewsItem';

const NewsList = (props) => {
    return (
                    <div>
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

                    </div>

            

    )
}

export default NewsList;