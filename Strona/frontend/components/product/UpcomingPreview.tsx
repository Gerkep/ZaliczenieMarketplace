import styled from "styled-components";
import Image from "next/image";
import Label from "../common/Label";
import ProgressBar from "../common/ProgressBar";
import { useEffect, useState } from "react";
import Link from "next/link";


const UpcomingPreview = (props: {date: Date | undefined, image: any, productName: string, id: string}) => {

    const {date, image, productName, id} = props;

    const [started, setStarted] = useState(false);

    useEffect(() => {
        if(date){
            if(Number(date) < new Date().getTime()){
                setStarted(true);
            }
        }
    }, [date]);

    return (
        <PreviewContainer>
            <PreviewInfo>
                <ProductName>{productName}</ProductName>
                {date &&
                <div>
                    {started ?
                        <DateContainer><GreenStatus />Happening Now</DateContainer>
                        :
                        <DateContainer>{date.toDateString()}<Time>{date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</Time></DateContainer>
                    }
                    <SmallLabel>Rarity</SmallLabel>
                    <ProgressBar bgcolor="black" completed="60" height="0.3rem" width="95%"/>
                </div>
                }
                {date ?
                    started ?
                    <Link href={`item/${id}`}>
                        <BuyButton>Buy now</BuyButton>
                    </Link>
                    :
                    <div>
                        <NotifyButton>Notify me</NotifyButton>
                    </div>
                :
                <ProductPrice>$325</ProductPrice>
                }
            </PreviewInfo>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
            <PreviewImage>
                <Image alt="product img" style={{width: "90%", height: "auto"}} src={image}></Image>
            </PreviewImage>
            </div>
        </PreviewContainer>
    )
}

export default UpcomingPreview;

const PreviewContainer = styled.div`
    width: 100%;
    padding: 1rem 1rem 1.2rem 1rem;
    margin 0.5rem 0rem 0.5rem 0rem;
    background-color: #F1F1F1;
    border-radius: 15px;
    display: grid; 
    grid-template-columns: 1.2fr 0.8fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "preview-info preview-image"; 
    @media (min-width: 768px) {
        padding: 1.5rem 1rem 1.5rem 1.5rem;
        border-radius: 10px;
        margin 0rem 0rem 0rem 0rem;
    }
`

const PreviewInfo = styled.div`
    grid-area: preview-info;
    padding-right: 0.7rem;
`

const PreviewImage = styled.div`
    grid-area: preview-image;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    border-radius: 10px;
    @media (min-width: 768px) {
        justify-content: center;
        height: 12rem;
        width: 12rem;
    }
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 1em;
    @media (min-width: 768px) {
        font-size: 1.5em;
        font-weight: 700;
    }
`

const DateContainer = styled.p`
    font-weight: 500;
    font-size: 0.7em;
    color: #777777;
    display: flex;
    align-items: center;
    width: 95%;
    @media (min-width: 768px) {
        font-size: 1em;
        margin-top: 0.5rem;
        font-weight: 400;
    }
`

const SmallLabel = styled.p`
    font-weight: 500;
    font-size: 0.5em;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    color: #777777;
    @media (min-width: 768px) {
        margin-top: 1.2rem;
        margin-bottom: 0.4rem;
    }
`

const ProductPrice = styled.p`
    font-weight: 900;
    font-size: 1.8em;
    margin-top: 1.5rem;
    @media (min-width: 768px) {
        font-size: 1.2em;
        font-weight: 500;
    }
`

const GreenStatus = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #6DFFB0;
    margin-right: 0.7rem;
`

const BuyButton = styled.button`
    margin-top: 1.2rem;
    background-color: black;
    color: white;
    width: 8rem;
    height: 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        margin-top: 2.5rem;
        width: 12rem;
        height: 2.4rem;
    }
`

const NotifyButton = styled.button`
    margin-top: 1.2rem;
    color: black;
    border: 2px solid #EAEAEA;
    width: 8rem;
    height: 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        margin-top: 2.5rem;
        width: 12rem;
        height: 2.4rem;
        &:hover {
            background-color: #EAEAEA;
        }
    }
`

const Time = styled.div`
    margin-left: 0.5rem;
`