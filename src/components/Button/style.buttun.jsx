import styled from "styled-components";

export const Button = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: normal;
  margin-right: 30px;
`;

export const Span = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 400;
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
