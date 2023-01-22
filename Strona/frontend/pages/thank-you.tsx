import tick from "../public/img/icons/tickIcon.png";
import bag from "../public/img/icons/bagIcon.png";
import Image from "next/image";
import styled from "styled-components";
import ProductPreview from "../components/product/ProductPreview";
import shoe from "../public/img/shoe.png";
import ActionButton from "../components/common/ActionButton";
import Link from "next/link";
import LoadingPage from "../components/common/LoadingPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ModalTemplate from "../components/modal/common/ModalTemplate";
import Navbar from "../components/common/Navbar";
import FilterContainer from "../components/common/FilterContainer";
import Products from "../components/product/Products";
import SuccessPreview from "../components/product/SuccessPreview";


const Success = () => {

    const [mobile, setMobile] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, [])
      
    return (
        <SuccessContainer>
            <LoadingPage />
            {mobile ?
            <div>
                <Image alt="search" style={{width: "5rem", height: "5rem", margin: "0 auto"}} src={tick}></Image>
                <SuccessTitle>Success!</SuccessTitle>
                <SuccessDescription>Dior Sneakers are on their way to your doorstep</SuccessDescription>
                <PreviewContainer>
                    <SuccessPreview image={shoe}/>
                </PreviewContainer>
                <Link href="/">
                    <ContinueButton>
                        <Image alt="buy icon" style={{width: "1.2rem", height: "1.2rem", marginRight: "1rem"}} src={bag}></Image>
                        CONTINUE SHOPPING
                    </ContinueButton>
                </Link>
                <Link href="/profile/gerke.eth">
                    <ProfileButton>
                        VIEW PROFILE
                    </ProfileButton>
                </Link>
            </div>
            :
            <div>
                <Navbar showProfile={true} admin={false}  showHome={true} showUpcoming={true}/>
                <FilterContainer filters={[]} filter={''} setFilter={''} title={"Market"}/>
                <Products />
                <ModalTemplate onClose={() => router.push("/")}>
                    <div style={{width: "26rem"}}>
                    <Image alt="search" style={{width: "5rem", height: "5rem", margin: "0 auto"}} src={tick}></Image>
                    <SuccessTitle>Success!</SuccessTitle>
                    <SuccessDescription>Dior Sneakers are on their way to your doorstep</SuccessDescription>
                    <PreviewContainer>
                        <SuccessPreview image={shoe}/>
                    </PreviewContainer>
                    <Link href="/">
                        <ContinueButton>
                            <Image alt="buy icon" style={{width: "1.2rem", height: "1.2rem", marginRight: "1rem"}} src={bag}></Image>
                            CONTINUE SHOPPING
                        </ContinueButton>
                    </Link>
                    <Link href="/profile/gerke.eth">
                        <ProfileButton>
                            VIEW PROFILE
                        </ProfileButton>
                    </Link>
                    </div>
                </ModalTemplate>
            </div>
            }
        </SuccessContainer>
    )
}

export default Success;

const SuccessContainer = styled.div`
    padding-top: 2.5rem;
    @media (min-width: 768px) {
        padding: 0;
    }
`

const SuccessTitle = styled.h1`
    text-align: center;
    margin-top: 1rem;
    font-weight: 900;
    font-size: 2em;
`

const SuccessDescription = styled.h1`
    margin: 0 auto;
    width: 80%;
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1em;
`

const PreviewContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
`
const ContinueButton = styled.button`
    margin: 0 auto;
    margin-top: 2.5rem;
    background-color: black;
    color: white;
    width: 90%;
    padding: 0.7rem 0 0.7rem 0;
    border-radius: 10px;
    font-weight: 900;
    text-align: center;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ProfileButton = styled.button`
    margin: 0 auto;
    margin-top: 1rem;
    background-color: #F5F5F5;
    color: black;
    width: 90%;
    padding: 0.7rem 0 0.7rem 0;
    border-radius: 10px;
    font-weight: 900;
    text-align: center;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`