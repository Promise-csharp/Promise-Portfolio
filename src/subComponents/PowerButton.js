// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Power = styled.div`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
color :black;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color:grew;
    box-shadow: 0 0 25px 20px rgba(0,0,255,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        
        <div>
            
            <NavLink to="/">
            <Power><div>Home</div></Power>
            
            </NavLink>
            
            
        </div>
    )
}

export default PowerButton
