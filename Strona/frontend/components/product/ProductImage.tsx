import styled from "styled-components";
import Image from "next/image";

const ProductImage = ({image}: any) => {
    return (
        <ImageContainer>
            <Image alt="product img" style={{width: "85%", height: "auto"}} src={image}></Image>
        </ImageContainer>
    )
}

export default ProductImage;

const ImageContainer = styled.div`
    width: 95%;
    height: 20rem;
    padding: 1rem;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    @media (min-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
        background-color: #F1F1F1;
    }
`

