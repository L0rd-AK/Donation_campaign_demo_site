import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
// import { useEffect,useState } from "react";
const DonationDetail = () => {
    const notify=(dolar)=>{
        // const donations=localStorage.getItem('Donations');
        // if(donations.find(i=>i==id))
        toast.success(`You have successfully Donated ${dolar}`);
    }
    const card=useLoaderData();
    const {id}=useParams();
    const getDonationItem=()=>{
        const donations=localStorage.getItem('Donations');
        if(donations){
            return JSON.parse(donations);
        }
        return [];
    }
    const storeDonation=()=>{
       
        const donations=getDonationItem();
        if(donations.find(i=>i==id)){
            // 
        }else{
            donations.push(id);
            localStorage.setItem('Donations',JSON.stringify(donations));
        }
    }
    // console.log(card);
    let found={};
    card.map((i)=>{
        if(i.id==id)found=i;
    })
    // console.log(found);
    
    return (
        <div className='mx-5 mb-10'>
            <div className='lg:max-w-7xl mx-auto mt-20'>
                <div className='relative'>
                    <img className='w-full lg:h-[600px]' src={found.Picture} alt="" />
                    <div className='bg-black bg-opacity-40 h-[50px] md:h-[100px] -mt-[50px] absolute md:-mt-[100px] w-full flex items-center'>
                        <button onClick={()=>{storeDonation(),notify(found.Price)}} style={{ backgroundColor: `${found.Text_button_bg}`}} className='btn btn-sm md:btn-md text-xs md:text-lg border-none text-white ml-5'>Donate  {found.Price}</button>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl text-black font-bold mt-5'>{found.Title}</h1>
                    <p className='mt-10 text-black '>{found.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetail;