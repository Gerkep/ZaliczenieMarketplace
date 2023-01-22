import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProductPreview = ({image}: any) => {
    return (

            <PreviewCenter>
                <PreviewImage>
                    <Image alt="product img" style={{width: "auto", maxHeight: "100%"}}  src={image}></Image>
                </PreviewImage>
            </PreviewCenter>
    )
}

export default ProductPreview;

const PreviewImage = styled.div`
    width: 35vw;
    height: 85%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: 0.2s ease-in-out;
    border-radius: 15px;
    @media (min-width: 768px) {
        width: 10rem;
        height: 10rem;
    }
`

const PreviewCenter = styled.div`
    width: 45vw;
    height: 45vw;
    padding: 1rem;
    margin 0.5vw 0.5vw 0.5vw 0.5vw;
    padding: 1rem;
    background-color: #F1F1F1;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover ${PreviewImage} {
       transform: scale(1.05);
    }
    @media (min-width: 768px) {
        width: 12rem;
        height: 12rem;
    }
`