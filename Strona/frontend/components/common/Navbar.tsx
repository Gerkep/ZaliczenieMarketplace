import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/lvlogo.png";
import profileIcon from "../../public/img/icons/profileIcon.png"
import shareIcon from "../../public/img/icons/shareIcon.png"
import plusIcon from "../../public/img/icons/plusIcon.png";
import marketplaceIcon from "../../public/img/icons/marketplaceIcon.png";
import calendarIcon from "../../public/img/icons/calendarBlackIcon.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const AddDropModal = dynamic(() => import('../modal/desktop/AddDropModal'), {
  ssr: false,
});

const Navbar = (props: {showProfile: boolean, admin: boolean, showHome: boolean, showUpcoming: boolean}) => {
    const {showProfile, admin, showHome, showUpcoming} = props;

    const [mobile, setMobile] = useState(true);
    const [openNewDropModal, setOpenNewDropModal] = useState(false);

    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
    }, [])

    return (
        <>
        {openNewDropModal && <AddDropModal onClose={() => setOpenNewDropModal(false)} mobile={mobile}/>}
        {!mobile &&
            <LogoDesktop>
                <Image alt="logo" style={{width: "auto", height: "2rem"}} src={logo}></Image>
            </LogoDesktop>
        }
        <NavbarContainer>
            <Link href="/">
                <Logo>
                    <Image alt="logo" style={{width: "auto", height: "2rem"}} src={logo}></Image>
                </Logo>
            </Link>
            <Navigation>
                {admin &&
                    mobile ?
                    <Link href="/add-drop">
                        <NavIcon>
                            <Image alt="logo" style={{width: "auto", height: "100%"}} src={plusIcon}></Image>
                        </NavIcon>
                    </Link>
                    :
                    <NavIcon onClick={() => setOpenNewDropModal(true)}>
                        <Image alt="logo" style={{width: "auto", height: "100%"}} src={plusIcon}></Image>
                        <IconText>Add new</IconText>
                    </NavIcon>
                }
                <Link href="/profile/gerke.eth">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "100%"}} src={profileIcon}></Image>
                        <IconText>Profile</IconText>
                    </NavIcon>
                </Link>
                <Link href="/upcoming">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "100%"}} src={calendarIcon}></Image>
                        <IconText>Upcoming</IconText>
                    </NavIcon>
                </Link>
                <Link href="/">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "100%"}} src={marketplaceIcon}></Image>
                        <IconText>Home</IconText>
                    </NavIcon>
                </Link>
            </Navigation>
        </NavbarContainer>
        </>
    )
}

export default Navbar;


const NavbarContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        background-color: black;
        padding: 1.5rem;
        clip-path: polygon(50% 0, 100% 0%, 100% 100%, 60% 100%);
    }
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
`

const NavIcon = styled.div`
    margin-left: 1.5rem;
    height: 1.5rem;
    @media (min-width: 768px) {
        filter: invert(1);
        margin-left: 2.5rem;
        cursor: pointer;
        display: flex;
        height: 1.2rem;
        margin-left: 3rem;
        align-items: center;
    }
`
const Logo = styled.div`
`
const LogoDesktop = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: block;
        position: absolute;
        top: 1.5rem;
        left: 1rem;
    }
`

const IconText = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: inline;
        white-space: nowrap;
        margin-left: 0.7rem;
    }
`