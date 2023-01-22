import styled from 'styled-components';

const PageTitle = (props: any) => {
    return(
        <Title>
            {props.children}
        </Title>
    )
}

export default PageTitle;

const Title = styled.div`
    font-size: 7vw;
    line-height: 12vw;
    font-weight: bold;
    @media (min-width: 768px) {
        font-size: 2em;
        line-height: 2.4em;
        font-weight: 600;
    }
`