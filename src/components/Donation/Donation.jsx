import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import DonationCard from "../DonationsCard/DonationCard";
const Donation = () => {
    const [alreadyDonated,SetAlreadyDonated]=useState([]);
    const [hidden,SetHidden]=useState('hidden');
    const [hidden2,SetHidden2]=useState('');
    const card=useLoaderData();
    
    const getDonationItem=()=>{
        const donations=localStorage.getItem('Donations');
        if(donations){
            return JSON.parse(donations);
        }
        return [];
    }
   
    const SeeAll=()=>{
        SetHidden('hidden');
        const storedDonations=getDonationItem();
        const OurDonations=[];
        for(const i of storedDonations){
            const j=card.find(cards=>cards.id==i)
            if(j) OurDonations.push(j);
        }
        SetAlreadyDonated(OurDonations);
    }
    useEffect(()=>{
        const storedDonations=getDonationItem();
        // const storedItem= getDonationItem();
        
        if(parseInt(storedDonations.length)>0){
            SetHidden2('hidden');
        }
        const OurDonations=[];
        for(const i of storedDonations){
           card.map((cards)=>{
                if(cards.id==i){
                    OurDonations.push(cards);
                }
           })
        }
       
        if(OurDonations.length>4){
            const OurDonations2=OurDonations.slice(0,4);
            SetAlreadyDonated(OurDonations2);
            SetHidden('');
        }
        else{
            SetAlreadyDonated(OurDonations);
        }
        
        
    },[card])


    return (
       <div className="mx-5">
        <div className={`${hidden2} flex justify-center`}>
            <div>
                <img className="w-full h-[500px] mt-10 rounded-lg" src={`https://i.ibb.co/XLhwpHk/Donate.webp`} alt="" />
                <h1 className="text-black text-2xl text-center mt-5 font-bold">You havent donated yet</h1>
            </div>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5 max-w-7xl mt-20">
            {
                alreadyDonated.map(card=> <DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
           <div className="flex justify-center mt-5">
                <button onClick={()=>{SeeAll()}} className={`bg-[#009444] ${hidden} px-6 py-3 rounded-lg text-white font-semibold text-center`}>See All</button>
           </div>
       </div>
    );
};

export default Donation;