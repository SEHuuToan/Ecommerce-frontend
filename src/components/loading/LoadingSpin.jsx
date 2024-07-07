
import { Spin } from 'antd';
import PropTypes from 'prop-types';
const LoadingSpin = ({loading, children}) => {
    return (
        <>
            <Spin size="large" spinning={loading}>
                {children}
            </Spin>
        </>
    );
}
LoadingSpin.propTypes =  {
    loading: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
}
export default LoadingSpin;