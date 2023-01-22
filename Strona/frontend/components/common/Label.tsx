import styled from "styled-components";

const Label = ({children}: any) => {
    return (
    <LabelText>
        {children}
    </LabelText>
    )
}

export default Label;

const LabelText = styled.div`
    color: #7B7B7B;
    font-weight: 400;
    font-size: 0.8em;
`