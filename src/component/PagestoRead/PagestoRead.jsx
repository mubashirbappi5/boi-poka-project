import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const PagestoRead = () => {
    const data = useLoaderData();
    console.log(data)



    return (
        <div className='w-11/12 mx-auto'>
            <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="bookName" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="totalPages
" fill="#8884d8" barSize={30} />
  </BarChart>
        </div>
    );
};

export default PagestoRead;