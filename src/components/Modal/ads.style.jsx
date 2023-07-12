import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 60px;
  opacity: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #f4f5f6;
  border-radius: 12px;
  position: relative;
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
`;

export const BtnCloseDiv = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
`;

export const btnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

    &:after,
    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 47%;
        right: -4px;
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

export const FormNewArt = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const FormInput = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
`;

export const FormArea = styled.textarea`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
`;

export const FormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  span {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
`;

export const BarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const BlockImg = styled.div`
  cursor: pointer;
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 2;
`;

export const ImgCoverLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  ::after,
  ::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  ::before {
    transform: rotate(90deg);
  }
`;

export const BlockPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
`;

export const InputPrice = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  ::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;

export const InputPriceCover = styled.div`
  width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    position: absolute;
    bottom: 13px;
    left: 170px;
    z-index: 0;
    background-color: #FFFFFF;
    
    &:after {
            content: "\A0 \20BD";
            width: 24px;
            height: 24px;
            position: absolute;
            
            font-size: 16px;
            line-height: 24px;
            color: #000000;
            z-index: 2;
        }
            
`;

export const BtnPub = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
`;

export const InputDoc = styled.input`
`;

