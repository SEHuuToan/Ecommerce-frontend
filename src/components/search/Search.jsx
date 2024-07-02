import { useCallback } from "react";
import './Search.css'
import useSearchProductStore from "../../store/searchStore";


const Search = ({ onSearch }) => {
    const setQuery = useSearchProductStore((state) => state.setQuery);
    const query = useSearchProductStore((state) => state.query);
    const setSearchResults = useSearchProductStore((state) => state.setSearchResults);


    // const handleSearch = useCallback(debounce(async () => {
    //     if(query){
    //         try {
    //             const res = await axiosGet(`search/${query}`);
    //             setSearchResults(res.data);
    //             console.log('product search: ', res.data);
    //         } catch (error) {
    //             console.error('Error searching:', error);
    //         }
    //     }else{
    //         setSearchResults([]);
    //     }
    // }, 500), [query, setSearchResults])
 
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className="search-input"
                    placeholder="Search..."
                />
            </div>
        </>
    );
}
export default Search;