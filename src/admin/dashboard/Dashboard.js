import React, { useState } from 'react';
import pic from '../../svg/pic-1.png';
import pic1 from '../../svg/dash.jpg'; 
import pic2 from '../../svg/dash1.jpg';
import pic3 from '../../svg/dash3.jpg'; 
import pic4 from '../../svg/dash4.jpg';
import {FaAngleDown,FaEnvelope,FaPowerOff,FaListUl,FaHome,FaRegBookmark} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Chart from './Chart';


import NewChart from './NewChart';
import MessagePopup from './MessagePopup';
import NotiPopup from './NotiPopup';
import TableData from './TableData';
import RightPopup from './RightPopup';



const Dashboard=()=>{
  const tabledata = [
    {
      "assignment":'Davin',
      "subject":"Fund is not recieved",
      "status":"Done",
      "last_update": "Dec 5 2017",
      "tracking_Id": "WD-123456"
  },
  {
    "assignment":'Alex Smith',
    "subject":"High loading time",
    "status":"Progress",
    "last_update": "Dec 5 2017",
    "tracking_Id": "WD-123456"
},
{
  "assignment":'Davin',
  "subject":"	Website down for one week",
  "status":"On Hold",
  "last_update": "Dec 5 2017",
  "tracking_Id": "WD-123456"
},
{
  "assignment":'Jhon',
  "subject":"	Loosing control on server",
  "status":"Rejected",
  "last_update": "Dec 5 2017",
  "tracking_Id": "WD-123456"
},

]
    const [modalOne,setModalOne] = useState(false);
const messageClick=()=>{
    setModalOne(modalOne === false ? true : false);  
   
   setMessagesOpen(false);
   setNotiOpen(false);  
}
const [messageOpen,setMessagesOpen] = useState(false);
const popupMessage=()=>{
    setMessagesOpen(messageOpen === false ? true : false); 
   setModalOne(false);
   setNotiOpen(false);
}
const [notiOpen,setNotiOpen] = useState(false);
const notiMessage=()=>{
    setNotiOpen(notiOpen === false ? true : false); 
   setModalOne(false);
   setMessagesOpen(false);
  }
  const [rightOpen,setRightOpen] = useState(false);
const rightMessage=()=>{
    setRightOpen(rightOpen === false ? true : false); 
   setModalOne(false);
   setMessagesOpen(false);
   setNotiOpen(false);  
  }
  function changeStatus(status){
    let btnColor = "";
    // eslint-disable-next-line default-case
    switch(status.toLowerCase()){
      case 'done': btnColor = "bg-green-500"
                  break; 
      case 'progress':  btnColor = "bg-orange-500"
                        break;
      case 'on hold': btnColor ='bg-blue-500'
                      break;
      case 'rejected' : btnColor ='bg-red-500'      
                        break;
       default : btnColor ="";
                break;                 
    }
    return btnColor
  }
    return(
        <>
     <div className="container-fluid  mt-32">
       <nav className=' bg-white shadow-lg py-5 flex justify-between px-32 items-center sticky top-0 left-0 z-20'>
           <div className="">
               <h1 className='text-4xl font-bold'>Fraposter</h1>
           </div>

        <ul className='flex  justify-around space-x-20 items-center'>
            <li> <Link to="#" className='flex items-center' > <img src={pic} alt="" className='w-20 h-20 rounded-full mr-2' /> <p className='flex items-center text-3xl' onClick={messageClick}> David <FaAngleDown/> </p>  </Link> </li>
         
            <li> <Link to="#" > </Link> </li>
            <li> <Link to="#" className='text-3xl text-gray-400' onClick={popupMessage}> <FaEnvelope /> <span className='text-8xl text-orange-300 absolute bottom-16 '> . </span> </Link> </li>
          
            <li> <Link to="#" className='text-3xl text-gray-400' onClick={notiMessage} ><i className="fa-solid fa-bell"></i>  <span className='text-8xl text-red-500 absolute bottom-16'> . </span> </Link> </li>
          
            <li> <Link to="#" className='text-3xl text-gray-400'> <FaPowerOff/> </Link> </li>
            <li> <Link to="#" className='text-3xl text-gray-400' onClick={rightMessage} > <FaListUl/> </Link> </li>
        </ul>
       
       </nav>
        {
            modalOne? <div className="absolute top-64 px-10 right-1/3 rounded-md py-4 z-20  bg-white shadow-lg  ">
      
            <ul> 
                <li> <Link to="#" className='text-2xl'> Activity Log  </Link> </li>
                <li className='mt-12'> <Link to="#" className='text-2xl '> Sign Out  </Link> </li>
             </ul>
            </div> :""
        }
        {
            messageOpen ? <MessagePopup/>  :""
        }
      
      {
            notiOpen ? <NotiPopup/> :""
        }
       {
         rightOpen ? <RightPopup/> :""
       }
      <div className="flex space-x-4">
      <div className='lg:w-80 w-full h-auto border-r'>
        <ul className='bg-white px-8 '>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa fa-home mr-2" aria-hidden="true"></i> Home </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa fa-home mr-2" aria-hidden="true"></i> Categories </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-cart-shopping mr-2"></i> Products </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-phone mr-2"></i> Orders </Link> </li>
          <li className='py-5'> <Link to="#" className='text-2xl hover:bg-gray-200 p-4 rounded-md  '> <i className="fa-solid fa-gear mr-2"></i> Setting </Link> </li>
      
       
        </ul>
       </div>
       <div className=" w-full bg-gray-200">
         <div className="flex items-center space-x-4 px-10 mt-5">
             <div className="text-2xl bg-[#C87CFF] p-4 rounded-md text-white"> <FaHome/> </div>
             <div className="text-3xl font-bold"> <p>Dashboard</p> </div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-gradient-to-r from-rose-400 to-orange-300 p-16 m-10 text-white rounded-lg">
                    <div className="flex items-center justify-between"><h2 className='text-3xl  '>Weakly Sales</h2> <i className="fa-thin fa-arrow-trend-up text-3xl"></i> </div>
                    <h2 className='text-3xl mt-8 font-bold'> $ 150000 </h2>
                    <p className='mt-20 text-xl '> Increased by 60% </p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-16 text-white m-10 rounded-lg">
                  <div className="flex items-center justify-between">      <h2 className='text-3xl  '>Weakly Sales</h2>  <FaRegBookmark className='text-3xl'/> </div>
                    <h2 className='text-3xl mt-8 font-bold'> 45,6334 </h2>
                    <p className='mt-20 text-xl'> Decreased by 10% </p>
                    </div>
                    <div className="bg-[#3ED2BE] p-16 text-white m-10 rounded-lg">
                    <h2 className='text-3xl  '>Weakly Sales</h2>
                    <h2 className='text-3xl mt-8 font-bold'> 95,7685 </h2>
                    <p className='mt-20 text-xl '> Increased by 5% </p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="bg-white p-10  m-10 rounded-md">
                       <div className="flex items-center justify-between">
                           <h2 className='text-3xl'>Visit And Sales Statistics</h2>
                           <ul className='list-disc flex items-center' > 
                               <li className='mx-4 text-2xl'> CHN  </li>
                               <li className='mx-4 text-2xl'> USA  </li>
                               <li className='mx-4 text-2xl'> UK  </li>
                                </ul>
                              
                           </div>
                           <div className='mt-10 py-10'>
                                <Chart/>
                                </div>
                         </div>
                         <div className="bg-white  p-10 m-10 rounded-md">
                       <div className="flex items-center justify-between">
                           <h2 className='text-3xl'> Traffic Sources </h2>
                      
                           </div>
                          <div className='mt-10 py-20'>
                         <NewChart/>
                          </div>
                         
                         </div>
                     </div>
                    



<div className="flex flex-col m-10 p-10 bg-white">
<h1 className='text-3xl font-semibold'>Recent Ticket</h1>
<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
<div className="overflow-hidden  sm:rounded-lg">
 
<table className="min-w-full">

<thead className="bg-gray-50 dark:bg-gray-700">
<tr>
<th scope="col" className="py-3 px-6 text-2xl font-medium tracking-wider text-left text-black uppercase dark:text-gray-400">
Assignee
</th>
<th scope="col" className="py-3 px-6 text-2xl font-medium tracking-wider text-left text-black uppercase dark:text-gray-400">
Subject
</th>
<th scope="col" className="py-3 px-6 text-2xl font-medium tracking-wider text-left text-black uppercase dark:text-gray-400">
Status
</th>
<th scope="col" className="py-3 px-6 text-2xl font-medium tracking-wider text-left text-black uppercase dark:text-gray-400">
Last Update
</th>
<th scope="col" className="py-3 px-6 text-2xl font-medium tracking-wider text-left text-black uppercase dark:text-gray-400">
Tracking Id
</th>

</tr>
</thead>
<tbody>
  {
    tabledata.map((e,i)=>{
      return(
        <>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
<td className="py-4 px-6 text-xl font-medium text-gray-900 whitespace-nowrap dark:text-white">
{e.assignment}
</td>
<td className="py-4 px-6 text-xl text-gray-500 whitespace-nowrap dark:text-gray-400">
{e.subject}
</td>
<td className="py-4 px-6 text-xl font-medium text-left whitespace-nowrap">
<Link to="#" className={`px-4 py-2  text-white rounded-md ${changeStatus(e.status)}`}> {e.status} </Link>
</td>
<td className="py-4 px-6 text-xl text-gray-500 whitespace-nowrap dark:text-gray-400">
{e.last_update}
</td>
<td className="py-4 px-6 text-xl text-gray-500 whitespace-nowrap dark:text-gray-400">
{e.tracking_Id}
</td>
</tr>
        </>
      )
    })
  }




{/* <td className="py-4 px-6 text-xl font-medium text-right whitespace-nowrap">
<a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td> */}
</tbody>
</table>
</div>
</div>
</div>
</div>



                         <div className="flex justify-between lg:flex-nowrap flex-wrap">
                         <div className="bg-white m-10 lg:w-1/3 w-full rounded-md shadow-lg p-10">
                  Date Of the Page
                             </div>
                             <div className="bg-white m-10 lg:w-3/5 w-full rounded-md shadow-lg p-10">
                             <h2 className='text-3xl font-semibold'>Recent Updates</h2>
                             <div className="flex items-center space-x-10 mt-5">
                             <p className='text-2xl'> <i className="fa fa-user" aria-hidden="true"></i> Jack Menqu</p>
                             <p className='text-2xl'> <i className="fa fa-calendar" aria-hidden="true"></i> October 3rd, 2022 </p>
                             </div>
                             <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 items-center gap-2 ">
                              <div className="">
                                <img src={pic1} alt="" className='w-full rounded-lg' />
                              </div>
                              <div className="">
                                <img src={pic2} alt="" className='w-full rounded-lg' />
                              </div>
                              <div className="">
                                <img src={pic3} alt="" className='w-full rounded-lg'/>
                              </div>
                              <div className="">
                                <img src={pic4} alt="" className='w-full rounded-lg' />
                              </div>
                             </div>
                           </div>
                         </div>
              <TableData/>
       </div>
      </div>
     </div>
        </>
    )
}
export default Dashboard;