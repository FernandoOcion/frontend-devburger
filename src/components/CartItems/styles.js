import styled from "styled-components";

export const Container = styled.div`
background-color: #ffffff;
box-shadow: 0px 10px 40px 0px #00000008;
border-radius: 20px;
padding: 10px;
width: max-content;


`;

export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;
P{
    font-size: 16px;
    color: #b5b5b5;
}
`;

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width: max-content;
grid-gap: 10px 15px;

img{
    border-radius: 10px;
    width: 120px;
}

.lixo {
    width: 40px;
    border: none;
    background: transparent;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-self: center;
    align-items: center;
    

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}

.lixeira{
    width: 40px;
}
}

p{
    font-size: 16px;
    color: #000000;
    display: flex;
    align-items: center;
}

.quantity-container{
    display: flex;
    gap: 20px;
    align-items: center;

    button{
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
}
`;

export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`;
