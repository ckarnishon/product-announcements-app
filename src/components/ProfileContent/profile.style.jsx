import styled from "styled-components";

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`;

export const ProfileContent = styled.div`
  max-width: 834px;
`;

export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`;

export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 43px;
`;

export const SettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const ChangePhoto = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
`;

export const SettingsRight = styled.div`
  width: 630px;
`;

export const SettingsForm = styled.div`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
`;

export const SettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
`;

export const SettingsInput = styled.input`
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;

        ::placeholder {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.3);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
`;

export const SettingsBtn = styled.button`
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;

  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
`;