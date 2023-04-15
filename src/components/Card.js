import React from "react";
import styled from "styled-components";

export default function Card({movie}){
    const {title,rating,genres,summary,year,background_image,small_cover_image,medium_cover_image,large_cover_image} = movie;
    return (
        <CardWrap>
            <CardFront>
                <img src={medium_cover_image} alt={title}/>
            </CardFront>
            <CardBack>
                <dl>
                    <dt>{title}</dt>
                    <dd>
                    <span>{genres.join(', ')}</span>
                    <p>{summary}</p>
                    </dd>
                </dl>
            </CardBack>
        </CardWrap>
    )
}

const CardFront = styled.div`
    z-index: 2;
`;


const CardBack = styled.div`
    background-color: #1d467d;
    transform: rotateY(-180deg);
`;

const CardWrap = styled.div`
    position: relative;
    margin: 5px auto;
    width: 230px;
    height: 345px;
    border: 2px solid #c7a079;
    transform-style: preserve-3d;
    &>div {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transition: 0.5s linear;
    }
    :hover ${CardFront} {
        transform: rotateY(180deg);
    }
    :hover ${CardBack} {
        transform: rotateY(0deg);
    }
`;



