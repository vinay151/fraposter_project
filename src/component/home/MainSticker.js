import React from 'react';

import './banner.css';
import StickerData from './StickerData';
const MainSticker=()=>{
  const task =[
    {
      taskId:1,
      taskName:"Hello this is the Filter Data",
      taskStatus:"Demo Task",
    },
        {
      taskId:2,
      taskName:"Fix the bug on React project",
      taskStatus:"TO DO",
    },
    {
      taskId:3,
      taskName:"Fix the car",
      taskStatus:"This is the name",
    },
    {
      taskId:4,
      taskName:"Learn filtering data in React",
      taskStatus:"Sticker Data",
    },

  

  ]
return(
  <>

<StickerData head='Introduction Stickers' para='Shopping Your Favourite BMW, Motorsports and Anime Stickers'/>
<ul>
  To Do List :
  {
    task.filter(e=> e.taskName === 'Learn filtering data in React').map(data => 
      <li key={data.taskId}> {data.taskStatus} </li>
      )
  }
</ul>
  </>
)
}


export default MainSticker;