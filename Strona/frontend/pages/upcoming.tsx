import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import UpcomingPreview from "../components/product/UpcomingPreview";
import shoe from "../public/img/shoe.png";
import lvbag from "../public/img/lvbag.png";
import Navbar from "../components/common/Navbar";


const Upcoming = () => {

    const renderUpcoming = () => {
        return (
            <Feed>
                
            </Feed>
        )
    }

    return (
        <div>
            <Navbar showProfile={true} admin={true} showHome={true} showUpcoming={false}/>
            <TitleContainer>
                <PageTitle>Upcoming</PageTitle>
            </TitleContainer>
            <Feed>
                <PreviewContainer>
                    <UpcomingPreview date={new Date(new Date().getTime() - (24 * 60 * 60 * 1000))} image={shoe} productName="Match-Up Sneaker" id="1"/>
                </PreviewContainer>
                <PreviewContainer>
                    <UpcomingPreview date={new Date(new Date().getTime() + (24 * 60 * 60 * 1000))} image={lvbag} productName="LV Premium Bag" id="1"/>
                </PreviewContainer>
            </Feed>
        </div>
    )
}

export default Upcoming;

const PreviewContainer = styled.div`
    @media (min-width: 768px) {
        width: 42rem;
        margin: 1rem;
    }
`

const TitleContainer = styled.div`
    padding: 0.5rem 1.5rem 1rem 1rem;
`

const Feed = styled.div`
    margin: 0 auto; 
    width: 95%;
    margin-top: 1rem;
    @media (min-width: 768px) {
        width: 98%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0rem;
        justify-content: center;
    }
`