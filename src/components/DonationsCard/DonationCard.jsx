import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const DonationCard = ({card}) => {
    
    const {id,Picture,Text_button_bg,Category_bg,Category,Price,Title,Card_bg}=card;
    return (
        <div style={{ backgroundColor: `${Card_bg}`}} className='flex flex-col md:flex-row rounded-r-lg'>
            <div className=''>
                <img className='w-full h-[200px] rounded-t-lg md:rounded-l-lg' src={Picture} alt="" />
            </div>
            <div className='p-5 flex-grow space-y-3'>
                <span style={{ backgroundColor: `${Category_bg}`}} className='px-3 py-1 rounded-md font-semibold'><span style={{ color: `${Text_button_bg}`}}>{Category}</span></span>
                <h3 className='text-2xl font-bold text-black'>{Title}</h3>
                <p style={{ color: `${Text_button_bg}`}} className='text-xl font-semibold'>{Price}</p>
                <Link to={`/donation-detail-page/${id}`}><button style={{ backgroundColor: `${Text_button_bg}`}} className='px-4 py-2 text-white font-medium rounded-lg mt-2'>View Details</button></Link>
            </div>
        </div>
    );
};
DonationCard.propTypes = {
    card: PropTypes.array
};
export default DonationCard;