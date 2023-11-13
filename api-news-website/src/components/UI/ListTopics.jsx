import styles from './ListTopics.module.css'

const ListTopics = (props) => {
    const topics = [
        {id:1, name: "A la une", value:"general"},
        {id:2, name: "Economie", value:"business"},
        {id:3, name: "Divertissement", value:"entertainment"},
        {id:4, name: "Sports", value:"sports"},
        {id:5, name: "Science", value:"health"}

    ]

const { onCategoryChange } = props;

const handleCategoryClick = (value) =>{
    onCategoryChange(value);
 }

    return (
            <div>
                <ul className={styles.listTopics}>
                {topics.map(topic => 
                <li
                key={topic.id}
                onClick={()  => handleCategoryClick(topic.value)}
                >{topic.name}</li>
                )}
                </ul>
            </div>

    )
}

export default ListTopics;