import React from 'react';
import "./UsefulResources.css";

const ListItem = (props)=>{


    return(
        <div className='list-item'>
            <h4>{props.desc}</h4><a href={props.link} target='_blanc' ><button className='btn-rec'>Open</button></a>
         </div>
    )

}

export default ListItem;