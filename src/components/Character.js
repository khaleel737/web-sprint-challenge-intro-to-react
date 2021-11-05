// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const styledCard = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: 0.5s ease-in-out forwards;
  background-color: purple;
  h2 {
    color: black;
  }
  p {
    color: white;
  }
`


export default function Character({data}) {
    return (
        <>
            <h1>Character</h1>
            <div columns={1}>
            {data.map((character, i) => {
                return (
                    <styledCard className="Character" key={i}>
                                {character.name}
                    </styledCard>
                );
            })}
            </div>
        </>
    );
}


