import React from 'react';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    console.log(' in bookmark')
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-3xl'>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};

export default Bookmark;