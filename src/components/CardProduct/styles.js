import styled from "styled-components";

export const Container = styled.div`
    background: #ffffff;
    border-radius: 30px;
    box-shadow: 0px 30px 60px 0px #3939391A;
    display: flex;
    gap: 12px;
    padding: 16px;
    width: max-content;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
export const Image = styled.img`
    width: 150px;
    border-radius: 10px;
`;
export const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;
export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 30px;
    color: #000000;
`;
