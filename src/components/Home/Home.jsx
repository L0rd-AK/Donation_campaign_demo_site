import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
// import { useState } from "react";
import Hero from "../Hero/Hero";
import Cards from '../Cards/Cards'
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const [catagory,SetCatagory]=useState([]);
    const [str,SetStr]=useState('');
    const data=useLoaderData();
    
    // console.log(data)
    useEffect(()=>{
        SetCatagory(data);
    },[data])
    
    return (
        <div>
            <Hero SetStr={SetStr}></Hero>
            <div className="max-w-7xl mx-auto">
            <Cards str={str} catagory={catagory}></Cards>
            </div>
        </div>
    );
};

Home.propTypes = {
    catagory: PropTypes.array
};
export default Home;