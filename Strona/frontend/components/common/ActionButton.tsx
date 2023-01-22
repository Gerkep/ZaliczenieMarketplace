import styled from "styled-components";
import Image from "next/image";
import Centered from "./Centered";
import { useEffect, useState } from "react";

const ActionButton = ({text, icon}: any) => {

    const [mobile, setMobile] = useState(true);
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, [])
      
    return (
        <>
        {mobile ?
            <Centered>
                {icon ?
                 <Button>
                    <Image alt="buy icon" style={{width: "1.2rem", height: "1.2rem", marginRight: "1rem"}} src={icon}></Image>
                    {text}
                 </Button>    
                 :
                 <Button>
                    {text}
                 </Button>       
                }
            </Centered>
            :
            icon ?
                <Button>
                   <Image alt="buy icon" style={{width: "1.2rem", height: "1.2rem", marginRight: "1rem"}} src={icon}></Image>
                   {text}
                </Button>    
                :
                <Button>
                   {text}
                </Button>       
               
        }
        </>
    )
}

export default ActionButton;

const Button = styled.button`
    position: fixed;
    bottom: 1rem;
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
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    @media (min-width: 768px) {
        position: relative;
        bottom: 0;
        box-shadow: none;
        width: 15rem;
        margin-left: 0rem;
        margin-top: 0.5rem;
    }
`