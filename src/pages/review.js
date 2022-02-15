import React,{useState} from 'react';
import Breadcrumb from '../component/breadcrumb/Breadcrumb';
import {FaStar} from 'react-icons/fa';
import r from '../svg/twostick.PNG';
// import { useNavigate } from 'react-router-dom';
import ReviewForm from './reviewForm';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    
    '&$expanded': {
      minHeight: 56,
    
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


const Review =()=>{
//  const [click, setClick]= useState("Write Review");
//  const reviewClick=()=>{
//    if(
//     setClick("Cancel Review");
//    ){

//    }
 
//    else{
//      setClick("Write Review")
//    }
   
//  }
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
  setExpanded(newExpanded ? panel : false);
};



   const reviewData=[
     {
       head:"There's a reason they're number one",
       subhead:"15-02-2022",
       para:"There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.",
       name:"Honda Mclaren MP4/4"
     },
     {
      head:"Amazing Stuff",
      subhead:"16-02-2022",
      para:"Max Verstappen - Unleash the Lion",
      name:"Enzo Ferrari Quote"
    },
    {
      head:"Great Quality",
      subhead:"17-02-2022",
      para:"If you are looking for a great poster with high quality you are in the right place. The picture quality is crazy good",
      name:"Senna Honda Mclaren MP4/4"
    }
   ]
    return(
        <>
        <Breadcrumb heading="Review"/>
        <div className="container-fluid py-20 px-32">
        <h1 className='text-4xl font-extrabold'>REVIEW</h1>
        <div className="border-2 mt-5 ">
          <div className="">
        <div className="p-6">
        <div className="flex space-x-1">
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
             
                </div> 
        <h1 className='mt-1 text-lg'>Based on 40 review</h1>
        </div>
        <div className="p-6">
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
      
          <button className='py-3 px-6 border-2' > Write Review </button>
        
    
        </AccordionSummary>
        <AccordionDetails>
          <ReviewForm/>
        </AccordionDetails>
      </Accordion>
        </div>
      
      
    </div>
        <div>
     
        </div>
        <div className="flex justify-between">
          <h6 className='p-6 mt-10 text-lg '>Product Review (33) </h6>
     
          <div className="p-6">
            <select name="" id="" className='border-2 py-1 px-2 rounded-md'>
              <option value=""> Most Recent </option>
            </select>
          </div>
        </div>
        <hr />
        <div className="grid  grid-cols-1 lg:grid-cols-3 m-4 ">
          {
            reviewData.map((e,i)=>{
              return(
                <>
 <div className="border-2 p-4 my-2 mx-2  bg-[#FAFAFA]">
   <div className="img">
    
     <img src="" alt="" />
   </div>
          <div className="flex  justify-between">
                <p className='flex space-x-1'><FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm text-orange-500'/>
                <FaStar className='lg:text-xl  text-sm '/></p>
                <p>{e.subhead}</p>
                </div> 
            
                <h1 className='text-lg font-bold mt-3'>{e.head}</h1>
                <p className='text-base mt-3'>{e.para}</p>
                <div className="flex items-center mt-5">
                  <div className="w-20">
                  <img src={r} alt="" className='w-12 h-12 rounded-full' />
                  </div>
                <div className="w-full ">
                <h1 className='lg:text-lg text-sm'>{e.name}</h1>
                </div>
                </div>
          </div>
                </>
              )
            })
          }
         
       
        </div>
        </div>
        </div>








    
    </>

    )
}
export default Review;