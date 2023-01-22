import styled from "styled-components";
import Centered from "../../common/Centered";
import Label from "../../common/Label";
import ModalTemplate from "../common/ModalTemplate";
import ModalTitle from "../common/ModalTitle";
import { FormEvent, useEffect, useState } from "react";
import api from "../../../pages/api";

const Login = ({onSubmit}: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("render")
    }, [])
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await api.post('/signin', { email, password });
          localStorage.setItem('token', "Bearer " + response.data.token);
          console.log(response);
          setLoading(false);
          onSubmit();
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
    };

    return (
        <ModalTemplate onClose={() => console.log("")}>
            <ModalTitle>Sign in</ModalTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
            <Centered>
            <InputContainer>
                <Label>Email</Label>
                <Input 
                  type="email"
                  required 
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </Input>
            </InputContainer>
            <InputContainer>
                <Label>Password</Label>
                <Input 
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Input>
            </InputContainer>
            <LoginButton>Sign in</LoginButton>
            </Centered>
            </form>
        </ModalTemplate>
    )
}

export default Login;

const InputContainer = styled.div`
    margin: 0rem 0rem 1rem 0rem;
    width: 80%;
`

const Input = styled.input`
    width: 100%;
    height: 2.4rem;
    margin-top: 0.3rem;
    background-color: #E2E2E2;
    outline: none;
    border-radius: 10px;
    padding-left: 0.7rem;
    font-size: 1em;
`

const LoginButton = styled.button`
    margin-top: 2.5rem;
    background-color: black;
    color: white;
    width: 70%;
    padding: 0.5rem 0 0.5rem 0;
    border-radius: 10px;
    font-weight: 900;
    text-align: center;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`