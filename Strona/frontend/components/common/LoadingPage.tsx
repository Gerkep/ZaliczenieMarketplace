import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url:string) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return  (
    <div>
        {loading &&
            <LoadingContainer>
                <NavbarContainer>
                <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
                </NavbarContainer>
                <BlurBackground>
                    <Spinner></Spinner>
                </BlurBackground>
            </LoadingContainer>
        }
    </div>
    );
}

const NavbarContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`
const LoadingContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 102;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
const BlurBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Spinner = styled.div`
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: radial-gradient(farthest-side,#000000 94%,#0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%,#000000);
        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
        animation: spinner-c7wet2 1s infinite linear;
`