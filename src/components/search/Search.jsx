import { useEffect, useState } from "react";
import './Search.css'
import { Dropdown, message, Space } from 'antd';
import { axiosGet } from "../../utils/axiosUtils";
import useSearchStore from "../../store/searchStore";

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const setSearchResults = useSearchStore((state) => state.setSearchResults);


    const handleSearch = async () => {
        try {
            const res = await axiosGet(`search/${searchQuery}`);
            setSearchResults(res.data);
          } catch (error) {
            console.error('Error searching:', error);
          }
    };


    useEffect(() => {

    }, [])
    return (
        <>

            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    placeholder="Search..."
                />

            </div>
            <div className="dropdown-searchresult">
                <Dropdown
                    menu={{
                     setSearchQuery,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                           
                           
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </>
    );
}
export default Search;