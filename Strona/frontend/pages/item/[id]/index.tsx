 import shoe from "../../../public/img/shoe.png";
 import bagIcon from "../../../public/img/icons/bagIcon.png";
 import styled from "styled-components";
 import Image from "next/image";
 import LoadingPage from "../../../components/common/LoadingPage";
 import Navbar from "../../../components/common/Navbar";
 import Centered from "../../../components/common/Centered";
 import { useEffect, useState } from "react";
 import YeppBadge from "../../../components/common/YeppBadge";
import ProductImage from "../../../components/product/ProductImage";
import MainInfo from "../../../components/product/MainInfo";
import Props from "../../../components/product/Props";
import Link from "next/link";
import ActionButton from "../../../components/common/ActionButton";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router'
import ShipmentModal from "../../../components/modal/desktop/ShipmentModal";
import SellModal from "../../../components/modal/desktop/SellModal";

 const Product = () => {

     const [isOwner, setIsOwner] = useState(false);
     const [listed, setListed] = useState(true);
     const [drop, setDrop] = useState(false);
     const [mobile, setMobile] = useState(true);
     const [openShipment, setOpenShipment] = useState(false);
     const [openSell, setOpenSell] = useState(false);
     const router = useRouter();

     useEffect(() => {
         if(window.innerWidth >= 768){
           setMobile(false);
         }
       }, [])

     return (
        <PageContainer>     
        {openShipment && <ShipmentModal onClose={() => setOpenShipment(false)}/>}
        {openSell && <SellModal onClose={() => setOpenSell(false)}/>}
        <YeppBadge />   
         <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
         <LoadingPage />
         <PageContent>
             <Centered>
                 <ProductImage image={shoe}/>
             </Centered>
             <ProductInfoContainer>
                 <div>
                     {listed ? 
                        <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton" mobile={mobile}><Price>$234</Price></MainInfo>
                        :
                        <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton" mobile={mobile}></MainInfo>
                     }
                     <Description>
                         Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                     </Description>
                     {isOwner ?
                         listed ?
                             <Props owner="gerke.eth" invoice="" condition=""/>
                         :
                             <Props owner="gerke.eth" invoice="" condition=""/>
                         :
                         listed ?
                             <Props owner="gerke.eth" invoice="With VAT invoice" condition="New"/>
                         :
                             drop ?
                             <Props owner="gerke.eth" invoice="With VAT invoice" condition=""/>
                             :
                             <Props owner="gerke.eth" invoice="" condition=""/>

                     }
                     <ButtonContainer>
                     {isOwner ?
                         listed ?
                             <ActionButton text="DELIST" />
                         :
                            mobile ?
                             <Link href="/sell/1">
                                     <ActionButton text="LIST ITEM"/>
                             </Link>
                             :
                             <button onClick={() => setOpenSell(true)}>
                                <ActionButton text="LIST ITEM"/>
                             </button>
                         :
                         listed ?
                            mobile ?
                             <Link href="/shipment">
                                     <ActionButton text="ORDER NOW" icon={bagIcon}/>
                             </Link>
                             :
                             <button onClick={() => setOpenShipment(true)}>
                                <ActionButton text="ORDER NOW" icon={bagIcon}/>
                             </button>
                         :
                             drop ?
                                mobile ?
                                <Link href="/shipment">
                                        <ActionButton text="ORDER NOW" icon={bagIcon}/>
                                </Link>
                                :
                                <button onClick={() => setOpenShipment(true)}>
                                    <ActionButton text="ORDER NOW" icon={bagIcon}/>
                                </button>
                             :
                             <></>
                     }
                     </ButtonContainer>
                 </div>
             </ProductInfoContainer>
         </PageContent>
         </PageContainer>
     )
 }

 export default Product;

 const PageContainer = styled.div`
     @media (min-width: 768px) {
         height: 100vh;
         overflow: hidden;
     }
 `

 const PageContent = styled.div`
     padding-bottom: 5rem;
     @media (min-width: 768px) {
         display: grid; 
         grid-template-columns: 1fr 1fr; 
         grid-template-rows: 1fr; 
         gap: 0px 0px; 
         grid-template-areas: 
           ". .";
         padding-bottom: 0rem;
         height: 100vh;
     }
 `
 const Price = styled.p`
    font-size: 2em;
    font-weight: 900;
    @media (min-width: 768px) {
        font-weight: 600;
    }
 `

 const ProductInfoContainer = styled.div`
     @media (min-width: 768px) {
         margin: 0 auto;
         width: 70%;
         height: 80%;
         display: flex;
         align-items: center;
     }
 `

 const Description = styled.div`
     padding: 0 1rem 0 1rem;
     font-size: 1em;
     grid-area: product-brand;
 `

 const ButtonContainer = styled.div`
    @media (min-width: 768px) {
        padding: 0 0rem 0 1rem;
    }
 `