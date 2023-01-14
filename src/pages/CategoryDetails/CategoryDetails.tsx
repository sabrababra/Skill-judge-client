import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const router=useParams();
    console.log("Router",router)
    return (
        <div className='h-[100vh]'>
           <h2 className='text-4xl text-center font-bold'>
           Details About {router.id}
           </h2>
        </div>
    );
};

export default CategoryDetails;