import styled from "styled-components";
import Centered from "../../common/Centered";
import PageTitle from "../../common/PageTitle";
import ModalTemplate from "../common/ModalTemplate";
import { useRouter } from "next/router";
import Label from "../../common/Label";
import Link from "next/link";
import Image from "next/image";
import shoe from "../../../public/img/shoe.png";
import bagIcon from "../../../public/img/icons/bagIcon.png";
import searchIcon from "../../../public/img/icons/searchIcon.png";
import ActionButton from "../../common/ActionButton";
import { IoIosClose } from "react-icons/io";
import SummaryPreview from "../../product/SummaryPreview";

const ShipmentModal = ({onClose}: any) => {

    const router = useRouter();

    return (
        <ModalTemplate onClose={() => onClose()}>
            <div style={{width: "34rem"}}>
            <CloseModal onClick={() => onClose()}><IoIosClose></IoIosClose></CloseModal>
            <Centered>
                <PageTitle>Delivery details</PageTitle>
            </Centered>
            <FormInputs>
                <InputContainer>
                    <Label>First name</Label>
                    <Input placeholder="Piotr"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Last name</Label>
                    <Input placeholder="Gerke"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Address</Label>
                    <Input placeholder="Słoneczna 5"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>City</Label>
                    <Input placeholder="Lusowo"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Postal code</Label>
                    <Input placeholder="62-080"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Tel. number</Label>
                    <Input type="tel" placeholder="721 783 342"></Input>
                </InputContainer>
            </FormInputs>
            <Prop>
                <Label>Seller</Label>
                    <PropValue>
                        <Link href="/profile/gerke.eth">
                            gerke.eth
                        </Link>
                        <Link href="/profile/gerke.eth">
                            <Image alt="search" style={{width: "0.7rem", height: "0.7rem", marginLeft: "0.5rem"}} src={searchIcon}></Image>
                        </Link>
                    </PropValue>
            </Prop>
            <PreviewContainer>
                <SummaryPreview image={shoe} productName="Match-Up Sneaker" id="1"/>
            </PreviewContainer>
            <Link href="/thank-you">
                <Centered>
                    <ActionButton text="BUY NOW" icon={bagIcon}/>
                </Centered>
            </Link>      
            </div>  
        </ModalTemplate>

    )
}

export default ShipmentModal;

const CloseModal  = styled.button`
    display: flex;
    font-size: 2.2em;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background-color: transparent;
`

const FormInputs = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 768px) {
        margin-top: 0.5rem;
    }
`

const InputContainer = styled.div`
    margin: 0rem 0rem 1rem 1.5rem;
    @media (min-width: 768px) {
        margin: 0rem 0.5rem 1rem 0.5rem;
    }
`

const Input = styled.input`
    width: 9.5rem;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: #F2F2F2;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    font-size: 1em;
    @media (min-width: 768px) {
        width: 13rem;
        height: 2.4rem;
    }
`
const Prop = styled.div`
    margin: 1rem 2.5rem 1rem 1.5rem;
    @media (min-width: 768px) {
        margin-top: 0.5rem;
    }
`

const PropValue = styled.p`
    font-weight: 500;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    
`
const PreviewContainer = styled.div`
    width: 100%;
    padding: 0 1.5rem 0.5rem 1.5rem;
`