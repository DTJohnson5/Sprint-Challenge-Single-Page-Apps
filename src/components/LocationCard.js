import React from "react";
import {Card, Button} from 'semantic-ui-react';
import styled from 'styled-components';

export default function LocationCard({ name, type, dimension, residents }) {
  const CardStyling = styled(Card) `
  font-size: 1rem;
  width: 35%;
  `

  return (
    <CardStyling>
      <h1>{name}</h1>
      <br/>
      <p>{dimension}</p>
      <Button>Inhabitants: {residents}</Button>
    </CardStyling>
  );
}
