import React from "react";
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

const CardStyling = styled(Card) `
    font-size: 1.5rem;
    width: 30%;
    span {
        font-style: italic;
    }
`
export default function Episode(props) {
    return(
        <CardStyling>
            <h2>{props.name}</h2>
            <p>Episode: {props.episode}</p>
            <span>Air Date: {props.date}</span>
        </CardStyling>
    )
} 