import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { HiPencil } from "react-icons/hi";

const AddOrganizator = ({badges}) =>{
console.log('badges', badges)

    return(
        <>
            {/* {badges.map((data) => {
                return(
                    <div className='second__main-details' key={data.id}>
                        <div className='check'>
                            <input type='checkbox'/>
                            <p>{data.id}</p>
                        </div>
                        <p className='content-name'>{data.name}</p>
                        <p className='content-email'>{data.email}</p>
                        <p className='content-event'>{data.event}</p>
                        <div>
                            <a href='#'><HiPencil className='icon-details-pencil'/></a>
                            <a href='#'><HiOutlineTrash className='icon-details'/></a>
                        </div>
                    </div>
                )
            })} */}
        </>
    )
}

export default AddOrganizator