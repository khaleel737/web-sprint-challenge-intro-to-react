// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';



const StyledCard = styled.div`
 
  color: white;
  margin: 2% 20% 0% 20%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  justify-content: space-between;
`


export default function Character({data}) {
    return (
        <>
            <div>
            {data.map((character, i) => {
                return (
                    <StyledCard className="Character" key={i}>
                        <div>
                                {character.name}
                                </div>
                                <div>
                                {character.birth_year}
                                </div>
                    </StyledCard>
                );
            })}
            </div>
        </>
    );
}


