import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <>
        <div> 
            <ul>
                <li>
                    <Link className="index-link" to="/">Index</Link>
                    <Link className='home-link' to="/home">Home</Link>
                </li>
            </ul>
        </div>
        </>
    )
}
