import styled from "styled-components";
import Background from "../../assets/Group 7322background-login.svg";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LoginImage = styled.img`
    height: 70%;
`;
export const ContainerItens = styled.div`
    border-radius: 0px 10px 10px 0px;
    background: rgba(55, 55, 55, 1);
    height: 70%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        text-align: center;
        margin-top: 100px;
    }

`;
export const Label = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: #ffffff;
    margin-top: 28px;
    margin-bottom: 5px;

`;
export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0, 19);
    border-radius: 5px;
    border: ${(props) => (props.error ? "2px solid red" : "none")};
    padding-left: 10px;
    `;

export const Click = styled.p`
font-family: Roboto;
font-size: 14px;
font-weight: normal;
line-height: 16.41px;
color: #ffffff;

a{
    cursor: pointer;
    text-decoration: underline;
}

`;
