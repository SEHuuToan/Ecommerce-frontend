import {memo} from "react";
import './Search.css'
import useSearchProductStore from "../../store/searchStore";

const Search = () => {
    const setQuery = useSearchProductStore((state) => state.setQuery);
    const query = useSearchProductStore((state) => state.query);
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
export default memo(Search);