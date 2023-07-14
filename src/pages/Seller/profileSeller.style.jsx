import styled from "styled-components";


export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`;

export const MainCtnterBlock = styled.div``;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`;

export const ProfileSell = styled.div`
  width: 100%;
  padding-bottom: 70px;
`;

export const SellContent = styled.div`
  width: 100%;
`;

export const SellSeller = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
`;

export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;


export const LeftImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
`;

export const SellerRight = styled.div`
  width: auto;
`;

export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
`;

export const CityInf = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
`;

export const Button = styled.button`      
  margin-top: 20px;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #FFFFFF;
  font-family: normal
`;



export const Span = styled.span`  
  display: block;
  font-size: 14px;
  font-weight: 400;
`;


export const TitleH3 = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
`;

export const ShowPhone = styled.div`
  gap: 10px;
  display: flex;
  border: 2px solid;
  border-radius: 12px;
  left: 44%;
  position: absolute;
  top: 36%;
  width: 350px;
  height: 150px;
  background-color: rgb(240, 240, 240);
  padding: 12px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const btnCloseLine = styled.div`
  cursor: pointer;

    &:after,
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #585353;
        top: 44%;
        right: 10px;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
    &:hover {
        &:after,
        &:before {
            background-color: #0080C1;
        }
`;

export const text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(0, 158, 228);
  font-family: normal;
`;
export const SpanPhone = styled.span`
  font-size: 27px;
  font-weight: 500;
  line-height: 22px;
  color: rgb(0, 158, 228);
  font-family: normal;
`;
