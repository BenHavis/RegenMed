import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
	margin-right: 5%;
  display: flex;
  flex-flow: row nowrap;
	justify-content: space-around;
	padding: 0;
  li {
    padding: 18px 10px;
		color: white;
		border: 1px solid white;
		border-radius: 10px;
		display: flex;
    flex-direction: row;
		margin-right: 5%;
    align-items: center;
  }
	li a {
		color: white;
	   text-decoration: none;
	}
	
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#">Home</a></li>
      <li><a href="#">Add/Validate Your Clinic</a></li>
      <li><a href="#">Doctor Login</a></li>
    </Ul>
  )
}

export default RightNav