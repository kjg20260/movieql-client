import React from "react";
import styled from "styled-components";
import NoImage from "../assets/img/noimage.JPG"

export default function Card({movie}){
    const {title,rating,genres,summary,year,background_image,small_cover_image,medium_cover_image,large_cover_image} = movie;
    const noImage = (e)=> {
        e.target.src = NoImage;
    }
    return (
        <CardWrap>
            <CardFront>
                <img src={medium_cover_image} alt={title} onError={noImage}/>
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
    img {
        width : 230px;
        height : 345px;
    }
`;

const CardBack = styled.div`
    background-color: #1d467d;
    transform: rotateY(-180deg);
    dt {
        font-weight: 700;
        font-size: 1.5em;
        line-height: 1.3em;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
    }

    dd {
        margin-left: 0.25em;
        p {
            margin-top: 0.25em;
            font-size: 1.175em;
            line-height: 1.55em;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #fff;
        }
    }
`;

const CardWrap = styled.div`
    display : block;
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



