import { Pagination } from "antd";
import PropTypes from 'prop-types';

const TYPE_TO_ITEM_MAP = {
    category: 12,
    related: 6
}
const PaginationComponent = ({type, listItem, refName, currentPage, setCurrentPage}) => {
    let itemsPerPage = TYPE_TO_ITEM_MAP[type];
    const handlePagination = (page) => {
        setCurrentPage(page)
        refName.current?.scrollIntoView({behavior: 'smooth'})
      }
    return (
        <div className="pagination">
            <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={listItem.length}
                onChange={(page) => handlePagination(page)}
            />
        </div>
    );
}
PaginationComponent.propTypes =  {
    type: PropTypes.string.isRequired,
    listItem: PropTypes.array.isRequired,
    refName: PropTypes.shape({
        current: PropTypes.any
    }).isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
}
export default PaginationComponent