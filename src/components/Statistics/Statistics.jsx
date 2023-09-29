import PropTypes from 'prop-types';
import PieChart from './PieChart';

const Statistics = () => {
   
    
    return (
        <div className='mx-5'>
            <PieChart></PieChart>
        </div>     
    );
};
Statistics.propTypes = {
    catagory: PropTypes.array
};
export default Statistics;