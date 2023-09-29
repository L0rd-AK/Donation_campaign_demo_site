import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Card = ({catagory}) => {
    // console.log(catagory.Category)
    const {id,Picture,Category,Title,Card_bg,Text_button_bg,Category_bg}=catagory;

    return (
        <Link catagory={catagory} to={`/donation-detail-page/${id}`}>
            <div style={{ backgroundColor: `${Card_bg}`}} className='flex flex-col gap-5 rounded-b-lg'>
                <div className='flex-grow'>
                    <img className='w-full rounded-t-lg' src={Picture} alt="" />
                </div>
                <div  className='p-4'>
                    <span style={{ backgroundColor: `${Category_bg}`}} className='px-3 py-1 rounded-md font-semibold'><span style={{ color: `${Text_button_bg}`}}>{Category}</span></span>
                    <h3 style={{ color: `${Text_button_bg}`}} className='text-2xl font-semibold mt-3'>{Title}</h3>
                </div>
            </div>
        </Link>
    );
};
Card.propTypes = {
    catagory: PropTypes.array
  };

export default Card;