import React,{useState} from 'react';
import { DatePicker } from "@material-ui/pickers";


 
const DatePick=()=>{
    const [date, changeDate] = useState(new Date());
    return(
        <>
         <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
        </>
    )
}
export default DatePick;