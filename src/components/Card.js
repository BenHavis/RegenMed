import React from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`

width: 15%;
display: flex;
flex-direction: column;
background-color: white;
padding: 0 1% 0 1%;
font-family: "Mazda Type",helvetica,arial,sans-serif;
border-radius: 8%;

h2 {
	color: #111;
}

p {
	color: #444444;
	height: 50%;
}
`

const Card = ({ header, body, icon }) => {
  return (
    <StyledCard>
      <h2>{header}</h2>
      <p>{body}</p>
    </StyledCard>
  )
}

export default Card
