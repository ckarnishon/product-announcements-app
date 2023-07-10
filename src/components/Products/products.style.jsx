import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 30px 15px;
  justify-content: center;

  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e; // Firefox
  scrollbar-width: 2px; // Firefox
  scrollbar-width: 1px; // Firefox
  height: 922px;
  

  &::-webkit-scrollbar {
    width: 1px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 5px;
  }
`;

export const CardsItem = styled.div`
  margin: 0;
  padding: 5px;
  transition: all 0.3s;
  cursor: pointer;
    &:hover{
      transform: scale(1.05);
      box-shadow: 0 0 5px #c4c4c4
    }
  
`;

export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 260px;
  height: 270px;
  background-color: #f0f0f0;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h3`
  height: 48px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;


export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;


export const CardDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;
