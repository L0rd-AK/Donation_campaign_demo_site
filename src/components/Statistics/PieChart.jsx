// please install npm install react-apexcharts apexcharts
import React ,{  useEffect} from "react";
import  Chart  from "react-apexcharts";
const PieChart=()=>
{

   const getDonationItem=()=>{
        const donations=localStorage.getItem('Donations');
        if(donations){
            return JSON.parse(donations);
        }
        return [];
    }
    const storedCards=getDonationItem();
   useEffect( ()=>{
    

   },[]);

    return(
        
            <div className="flex justify-center">
                        <div className="hidden lg:flex flex-col">
                            <React.Fragment>
                            <div className=" flex mt-10 mb-10 w-full h-[200px] flex-col">
                            <h3 className="mt-10 text-center text-3xl text-black font-medium mb-5 underline">Welcome to Piechart</h3>
                            <Chart 
                            type="pie"
                            width={1349}
                            height={550}
                            series={ [12-storedCards.length,storedCards.length] }                

                            options={{ 
                                noData:{text:"Empty Data"},                        
                                colors:["#FF444A","#00C49F"],
                                labels:['Total Donation','Your Donation']                     
                            }}
                            >
                            </Chart>
                            </div>
                            </React.Fragment>
                        </div>
                <div className='mt-10 lg:hidden'>
                <React.Fragment >
                    <div className=" mb-10 ">
                        <h3 className="mt-10 text-center text-3xl text-black font-medium mb-5 underline">Welcome to Piechart</h3>
                        <Chart className="mt-16"
                        type="pie"
                        width={400}
                        height={450}

                        series={ [12-storedCards.length,storedCards.length] }                

                        options={{ 
                            noData:{text:"Empty Data"},                        
                            colors:["#FF444A","#00C49F"],
                            labels:['Total Donation','Your Donation']                     

                        }}
                        >
                        </Chart>
                    </div>
                </React.Fragment>
                </div>
                
            </div>
    );
}
export default PieChart;