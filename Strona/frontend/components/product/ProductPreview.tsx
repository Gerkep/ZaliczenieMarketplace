import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProductPreview = ({image, price}: any) => {
    return (
        <Link href="/item/1">
            <PreviewContainer>
                <PreviewImage>
                    <Image alt="product img" style={{width: "auto", maxHeight: "100%"}}  src={image}></Image>
                </PreviewImage>
                <ProductPrice>{price}</ProductPrice>
            </PreviewContainer>
        </Link>
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
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    @media (min-width: 768px) {
        width: 14.5rem;
        height: 14.5rem;
    }
`
const PreviewContainer = styled.div`
    width: 45vw;
    height: 45vw;
    padding: 1rem;
    margin 0.5vw 0.5vw 0.5vw 0.5vw;
    padding: 1rem;
    background-color: #F1F1F1;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    &:hover ${PreviewImage} {
       transform: scale(1.05);
    }
    @media (min-width: 768px) {
        width: 20rem;
        height: 20rem;
    }
`

const ProductPrice = styled.div`
    font-size: 1em;
    text-align: right;
    margin: 0 auto;
    margin-top: 1.5svw;
    width: 95%;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    @media (min-width: 768px) {
        font-weight: 500;
    }
`