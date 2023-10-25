
const Searchbar = ({onSearch, onFetch}) => {

    return(
        <div>
          <input onChange={onSearch} />
          <button onClick={onFetch}>Fetch Data</button>
        </div>
    )
}
export default Searchbar