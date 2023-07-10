import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
`;


export const FooterContainer = styled.div`
  width: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterImg = styled.div`
  width: 42px;
  height: 42px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;