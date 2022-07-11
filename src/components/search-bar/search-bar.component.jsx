import "./search-bar.styles.css"
const SearchBar = ({ onChange, className }) => {
        return (
        <input type="search" placeholder='Search monsters...' onChange={onChange} className={`search-bar ${className}`} />
    )
}


export default SearchBar;