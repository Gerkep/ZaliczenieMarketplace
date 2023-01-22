import styled from "styled-components";
import Image from "next/image";

const MainInfo = (props: any) => {

    return (
        <MainProductInfo>
            <ProductName><h1>{props.name}</h1></ProductName>
            <ProductBrand>{props.brand}</ProductBrand>
            <ProductPrice>{props.children}</ProductPrice>
        </MainProductInfo>
    )
}

export default MainInfo;

const MainProductInfo = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid; 
    grid-template-columns: 1.4fr 0.6fr; 
    grid-template-rows: 1fr 1.2fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "product-name product-price"
    "product-brand product-price";
    @media (min-width: 768px) {
        align-items: center;
        height: 6rem;
     }
`

const ProductName = styled.div`
    font-size: 1.2em;
    margin-top: 1vw;
    font-weight: 700;
    overflow: hidden;
    grid-area: product-name;
    @media (min-width: 768px) {
       font-size: 1.4em;
    }
`

const ProductBrand = styled.div`
    font-size: 0.8em;
    margin-top: 1vw;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-brand;
    @media (min-width: 768px) {
        margin-top: 0.2rem;
    }
`

const ProductPrice = styled.div`
    text-align: right;
    margin-top: 1vw;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-price;
`