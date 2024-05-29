import React, { useState } from "react";
import './Search.css'
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons'

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="search-input"
                placeholder="Search..."
            />
            <Button type="primary" icon={<SearchOutlined />} className="search-button" onClick={handleSearch}>
                Search
            </Button>
        </div>

    );
}
export default Search;