import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const StyledList = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40vh;
  width: 75%;
  margin: 0 auto;
  margin-top: 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
		border: 2px solid red;
		width: 90%;
  }
`

const Cardlist = () => {
  const cards = [
    {

      title: 'Stem Cell',
      body: 'Stem cell therapy is a form of regenerative medicine designed to repair damaged cells within the body by reducing inflammation and modulating the immune system.'
    },
    {

      title: 'Platelet-Rich Plasma',
      body: 'Platelet-rich plasma (PRP) therapy uses injections of a concentration of a patient’s own platelets to accelerate the healing of injured tendons, ligaments, muscles and joints.'
    },
    {

      title: 'Prolotherapy',
      body: 'Prolotherapy is a non-surgical injection procedure used to relieve back pain by treating connective tissue injuries (ligaments and tendons) of the musculoskeletal system that have not healed by either rest or conservative therapy in order to relieve back pain.'
    },
    {
      title: 'Gene Therapy',
      body: 'Gene therapy is a medical approach that treats or prevents disease by correcting the underlying genetic problem.'
    }

  ]
  return (
    <StyledList>
      {cards.map((card) => <Card body={card.body} header={card.title} key={card.title} />)}
    </StyledList>
  )
}

export default Cardlist
