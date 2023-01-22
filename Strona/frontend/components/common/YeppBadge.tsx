import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import yeppLogo from "../../public/img/yepplogo.png"

const YeppBadge = () => {
    const [mobile, setMobile] = useState(true);
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, [])
    return (
        <BadgeContainer>
        {!mobile &&
            <a href="https://www.yeppstudios.com">
            <Badge>
                <PowerText>Powered by:</PowerText>
                <Image alt="yepp" style={{width: "6rem", height: "auto"}} src={yeppLogo}></Image>
            </Badge>
            </a>
        }
        </BadgeContainer>
    )
}

export default YeppBadge;

const BadgeContainer = styled.div`
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    transition: 0.2s ease-in;
    &:hover {
        transform: scale(1.05);
        box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.3);
    }
`
const Badge = styled.div`
    padding: 0.3rem 1rem 0.3rem 1rem;
    border-radius: 10px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`

const PowerText = styled.div`
    color: white;
    font-size: 0.7em;
`
