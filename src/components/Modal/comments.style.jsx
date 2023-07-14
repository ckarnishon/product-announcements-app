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
  border: 1px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  height: auto;
  padding: 20px 92px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  border: 1px solid;
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;
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

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e; // Firefox
  scrollbar-width: thin; // Firefox
  scrollbar-width: 0px; // Firefox

  &:-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }

  &:-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`;

export const FormNewArt = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
`;

export const FormArea = styled.textarea`
  font-family: normal;
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;

  &:placeholder {
    font-family: normal;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
`;

export const BtnPab = styled.button`
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

export const ModalReviews = styled.div`
  width: 100%;
  height: 495px;
`;

export const ReviewsReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ReviewLeft = styled.div`
  margin-right: 12px;
`;

export const ReviewImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const ReviewRight = styled.div`
  cursor: pointer;
  display: block;
`;

export const ReviewName = styled.p`
  margin-bottom: 12px;
  font-weight: 600;

  & span {
    margin-left: 10px;
    color: #5f5f5f;
  }
`;

export const ReviewTitle = styled.h5`
  font-weight: 600;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`;

export const BlokAuth = styled.div`
  display: flex;
  gap: 85px;
  margin: 40px;
`;

export const H3 = styled.h3`
  font-size: 20px;
`;

export const LinkP = styled.p`
  font-size: 20px;
  color: rgb(0, 158, 228);
  cursor: pointer;
`;
