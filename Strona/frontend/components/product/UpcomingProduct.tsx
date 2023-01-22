import styled from "styled-components";

const UpcomingProduct = () => {

    return (
        <ProductContainer>
            <div>

            </div>
            
        </ProductContainer>
    )
}

export default UpcomingProduct;

const ProductContainer = styled.div`
    width: 100%;
    height: 45vw;
    padding: 1rem;
    margin 0.5vw 0.5vw 0.5vw 0.5vw;
    background-color: #F1F1F1;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". ."; 
`