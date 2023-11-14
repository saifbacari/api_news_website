import styles from './searchbar.module.css';


const Searchbar = ({onSearch, onFetch}) => {

    return(
        <div className={styles.searchbar}>
          <input className={styles.inputSearchbar}onChange={onSearch} />
          <button onClick={onFetch}>Fetch Data</button>
        </div>
    )
}
export default Searchbar