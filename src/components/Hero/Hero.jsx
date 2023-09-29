import './Hero.css'
import PropTypes from 'prop-types';
// import {search} from '../../utilities.js'
const Hero = ({SetStr}) => {
    const takeInput=(e)=>{
        e.preventDefault();
        const name = e.target.search.value;
        // console.log(name);
        // const value=document.getElementById('search').value;
        // console.log(value.toLowerCase());
        SetStr(name.toLowerCase());
        document.getElementById('search').value='';
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/df689Lz/background.jpg)'}}>
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="text-center">
            <h1 className="mb-5 text-3xl md:text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
           <form action="" onSubmit={takeInput}>
           <div className=''>
                <input name='search' type="text" placeholder="Search here..." id='search' className="input bg-white w-1/2 border-b-zinc-400  py-7 rounded-r-none text-black" />
                <button  className="bg-[#FF444A] text-white font-semibold border-none rounded-r-lg px-5 py-4">Search</button>
            </div>
           </form>
        </div>
        </div>
    );
};
Hero.propTypes = {
    catagory: PropTypes.array,
    SetStr: PropTypes.func
};
export default Hero;