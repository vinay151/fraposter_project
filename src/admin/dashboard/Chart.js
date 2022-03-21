import React from 'react';
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'
const Chart=()=>{
    const pdata=[
    {
        name:"JavaScript",
        student:13,
        price:10,
        product:23,
    },
    {
        name:"CSS",
        student:20,
        price:15,
        product:33,
    },
    {
        name:"Html",
        student:23,
        price:101,
        product:43,
    },
    {
        name:"Reactjs",
        student:15,
        price:12,
        product:53,
    },
    {
        name:"Python",
        student:25,
        price:200,
        product:63,
    },
    ]
    return(
        <>
       <ResponsiveContainer width="100%" aspect={2}>
           <BarChart data={pdata}  width={500}
          height={500}
        
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,}}>
         
               <XAxis dataKey="name" />
           
               <Tooltip />
          <Legend />
               <Bar dataKey="student"  fill="#8884d8"/>
               <Bar dataKey="price"  fill="#82ca9d"/>
               <Bar dataKey="product"  fill="red"/>
               </BarChart>
       </ResponsiveContainer>
        </>
    )
}
export default Chart;