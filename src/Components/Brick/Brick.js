import React from 'react';
import './style.css';

const Brick =  (props) =>{
    console.log("How is my prop",props)
     return(
         <div className='brick-container'>
             { props.name}
         </div>

     )
}
export default Brick;