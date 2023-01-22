import styled from "styled-components";
import Image from "next/image";
import tagIcon from "../../public/img/icons/tagIcon.png";
import Link from "next/link";
import { useRouter } from "next/router";

const BigPreview = ({image, name, id}: any) => {
    
    const router = useRouter();

    return (
        <ImageContainer onClick={() => router.push(`/item/${id}`)}>
            <Dim><ViewText>View Item</ViewText></Dim>
                <SellContainer>
                    <div onClick={e => e.stopPropagation()}>
                    <SellButton onClick={() => router.push(`/sell/${id}`)}>
                        <Image alt="buy icon" style={{width: "0.7rem", height: "0.7rem", marginRight: "0.5rem"}} src={tagIcon}></Image>
                        Sell
                    </SellButton>
                    </div>
                </SellContainer>
                <PreviewImage>
                    <Image alt="product img" style={{width: "auto", maxHeight: "100%"}} src={image}></Image>
                </PreviewImage>
                <AboutContainer>
                    <ProductName>{name}</ProductName>
                </AboutContainer>
        </ImageContainer>     
    )
}

export default BigPreview;

const Dim = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: none;
        position: absolute;
        width: 20rem;
        height: 20rem;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        z-index: 10;
        backdrop-filter: blur(2px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

const ViewText = styled.div`
    color: white;
`

const ImageContainer = styled.div`
    width: 95%;
    margin-top: 0.5rem;
    padding: 2rem 1rem 2rem 1rem;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10x;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        width: 20rem;
        height: 20rem;
        margin 0.5vw 0.5vw 0.5vw 0.5vw;

        &:hover ${Dim} {
            display: flex;
        }
    }
`

const PreviewImage = styled.div`
    @media (min-width: 768px) {
        width: 14.5rem;
        height: 14.5rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        border-radius: 15px;
        transition: 0.2s ease-in-out;
    }
`


const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
    @media (min-width: 768px) {
        margin-top: 0.5rem;
        justify-content: center;
    }
`

const SellContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        display: none;
    }
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 1em;
    @media (min-width: 768px) {
        font-weight: 600;
    }
`

const SellButton = styled.button`
    background-color: #E0E0E0;
    color: black;
    width: 8rem;
    height: 2rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
