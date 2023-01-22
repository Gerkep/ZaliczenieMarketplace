import styled from "styled-components";
import ProductPreview from "./ProductPreview";
import shoe from "../../public/img/shoe.png";
import bag from "../../public/img/lvbag.png";
import jacket from "../../public/img/lvjacket.png";
import pants from "../../public/img/lvpants.png";
import Product from "../../pages/add-drop";

const items = [{name: "Match-Up Sneaker", price: "$270", image: shoe}, {name: "LV Premium Bag", price: "$320", image: bag}, {name: "DOUBLE-BREASTED PONT NEUF JACKET", price: "$277", image: jacket}, {name: "KARAKORAM DENIM PANTS", price: "$177", image: pants},
 {name: "LV Premium Bag", price: "$320", image: bag}, {name: "KARAKORAM DENIM PANTS", price: "$177", image: pants}, {name: "DOUBLE-BREASTED PONT NEUF JACKET", price: "$277", image: jacket}, {name: "Match-Up Sneaker", price: "$270", image: shoe}, {name: "Match-Up Sneaker", price: "$270", image: shoe},
{name: "Match-Up Sneaker", price: "$270", image: shoe}, {name: "LV Premium Bag", price: "$320", image: bag}, {name: "DOUBLE-BREASTED PONT NEUF JACKET", price: "$277", image: jacket}, {name: "KARAKORAM DENIM PANTS", price: "$177", image: pants}]

const Products = () => {

    const renderItems = () => {
        const fetchedItems = items.map((item) => {
            return (
                <ProductPreview key={item.price} image={item.image} price={item.price} />
            )
        })
        return (
            <Container>
                {fetchedItems}
            </Container>
        )
    }
 
    return (
        <>
            {renderItems()}
        </>
    )
}

export default Products;

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem 0.5rem 0 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 4rem;
`