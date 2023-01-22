import styled from 'styled-components';

const ModalTitle = (props: any) => {
    return(
        <Title>
            {props.children}
        </Title>
    )
}

export default ModalTitle;

const Title = styled.div`
    font-size: 7vw;
    text-align: center;
    margin-bottom: 5vw;
    color: black;
    font-weight: 700;
    letter-spacing: .14rem;
    @media only screen and (min-width: 768px) {
        font-size: 3vw;
        letter-spacing: .2rem;
        margin-bottom: 1vw;
    }
`