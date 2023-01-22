import shoe from "../../../public/img/shoe.png";
import styled from "styled-components";
import ActionButton from "../../../components/common/ActionButton";
import ProductImage from "../../../components/product/ProductImage";
import MainInfo from "../../../components/product/MainInfo";
import LoadingPage from "../../../components/common/LoadingPage";
import Navbar from "../../../components/common/Navbar";
import Centered from "../../../components/common/Centered";
import Label from "../../../components/common/Label";
import InputDropdown from "../../../components/common/InputDropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalTemplate from "../../../components/modal/common/ModalTemplate";
import FilterContainer from "../../../components/common/FilterContainer";
import Products from "../../../components/product/Products";

const conditions = ["New", "Used"]
const invoices = ["No invoice", "VAT invoice"]

const Product = () => {

    const [condition, setCondition] = useState("New");
    const [invoice, setInvoice] = useState("No invoice");
    const [mobile, setMobile] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, []);

    return (
        <PageContainer>
            <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
            <LoadingPage />
            {mobile ? 
            <div>
                <Centered>
                    <ProductImage image={shoe}/>
                </Centered>
                <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton"><div style={{fontSize: "1.2em"}}>$<PriceInput placeholder="123" /></div></MainInfo>
                <InputContainer>
                        <Label>Description</Label>
                        <TextArea placeholder="Your item description"></TextArea>
                </InputContainer>
                <div style={{display: "flex"}}>
                <InputContainer>
                        <Label>Condition</Label>
                        <InputDropdown values={conditions} value={condition} onChange={setCondition} error={undefined} id="1"/>
                </InputContainer>
                <InputContainer>
                        <Label>Invoice</Label>
                        <InputDropdown values={invoices} value={invoice} onChange={setInvoice} error={undefined} id="2"/>
                </InputContainer>
                </div>
                <div onClick={() => router.replace("/item/1")}>
                    <ActionButton text="LIST FOR SALE" icon=""/>
                </div>
            </div>        
            :
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "40vh"}}>
                Page not found
            </div>
            }

        </PageContainer>
    )
}

export default Product;

const PageContainer = styled.div`
    padding-bottom: 7rem;
`

const InputContainer = styled.div`
    margin: 0rem 1rem 1rem 1rem;
`

const PriceInput = styled.input`
    width: 4.5rem;
    height: 2rem;
    margin-left: 0.3rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    font-size: 1em;
`