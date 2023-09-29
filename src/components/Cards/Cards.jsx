import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import Card from '../Card/Card';
import { useEffect } from 'react';
// import { useState } from 'react';
const Cards = ({catagory,str}) => {
    let NewCatagory=[];
    if(str=='food'||str=='health'||str=='education'||str=='clothing') {NewCatagory=catagory.filter(i=>(i.Category).toLowerCase()===str);}
    else{ 
        NewCatagory=catagory;
        // if(str!==''){toast.error(`No Data found related to ${str}`)}
    }
    useEffect(()=>{
        if(str!=='' && str!=='food' && str!=='health' && str!=='education' && str!=='clothing'){toast.error(`No Data found related to ${str}`)}
    },[str])
    return (
       <div className='text-center md:text-left'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-5 mb-28 mx-10'>
                {
                    NewCatagory.map(i=> <Card catagory={i} key={catagory.id}></Card>)
                }
            </div>
       </div>
    );
};

Cards.propTypes = {
    catagory: PropTypes.array,
    str: PropTypes.string
};
export default Cards;